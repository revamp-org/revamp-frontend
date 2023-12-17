"use client";
import { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem";
import { SortableContext } from "@dnd-kit/sortable";
import TaskDndContextProvider from "@/lib/providers/TaskDndContextProvider";
import { Task } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { GetTasksOfUser } from "@/graphql/queries.graphql";
import { useUser } from "@clerk/nextjs";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setTasks } from "@/redux/features/taskSlice";
import { ScrollArea } from "@/components/ui/scroll-area";

const TaskList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const { user } = useUser();
	const [loading, setLoading] = useState<boolean>(true);
	const tasks = useAppSelector((state) => state.task.tasks);
	const taskChanged = useAppSelector((state) => state.task.taskChange);
	const dispatch = useDispatch<AppDispatch>();

	const {
		error: _error,
		data,
		refetch,
	} = useQuery(GetTasksOfUser, {
		variables: { userId: user?.id },
	});

	useEffect(() => {
		if (data) {
			console.log("Data:", data);
			const fetchedTasks: Task[] = data.getTasksOfUser;

			dispatch(setTasks(fetchedTasks));
			setLoading(false);
		}
	}, [data, dispatch]);

	// after goal changed, refetch goals
	useEffect(() => {
		refetch({ userId: user?.id });
	}, [taskChanged, refetch, user?.id]);

	if (loading && typeof window !== "undefined" && localStorage.getItem("tasks") == null) {
		return <p>Loading...</p>;
	}

	return (
		<TaskDndContextProvider>
			<section className="space-y-2">
				<div className="flex items-center justify-between">
					<p className="text-lg">Tasks</p>
				</div>

				<ScrollArea className="h-[calc(100dvh-4rem-1.75rem-1rem)]">
					<div className="space-y-2">
						<SortableContext items={tasks.map((task: Task) => task.taskId)}>
							{tasks.map((task: Task) => (
								<TaskListItem
									key={task.taskId}
									task={task}
									href={
										isDashboardPage
											? `/dashboard/tasks?taskid=${task.taskId}`
											: `tasks?taskid=${task.taskId}`
									}
								/>
							))}
						</SortableContext>
					</div>
				</ScrollArea>
			</section>
		</TaskDndContextProvider>
	);
};

export default TaskList;
