"use client";
import { useEffect, useState } from "react";
import CreateTaskDialog from "./CreateTask";
import TaskListItem from "./TaskListItem";
import { SortableContext } from "@dnd-kit/sortable";
import TaskDndContextProvider from "@/lib/providers/TaskDndContextProvider";
import { Task } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { GetTasksOfUser } from "@/graphql/queries.graphql";
import { useUser } from "@clerk/nextjs";

const TaskList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const { user } = useUser();
	const [loading, setLoading] = useState<boolean>(true);

	const { error, data } = useQuery(GetTasksOfUser, {
		variables: { userId: user?.id },
	});

	useEffect(() => {
		if (data) {
			console.log("Data:", data);
			const fetchedTasks: Task[] = data.getTasksOfUser;
			setTasks(fetchedTasks);
			setLoading(false);
		}
	}, [data]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<TaskDndContextProvider setTasks={setTasks}>
			<section className="space-y-2">
				<div className="flex items-center justify-between">
					<p className="text-lg">Tasks</p>
				</div>

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
			</section>
		</TaskDndContextProvider>
	);
};

export default TaskList;
