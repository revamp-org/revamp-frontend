"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TodoListItem from "../todos/TodoListItem";
import { Icon } from "@iconify/react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Maybe, Task, Todo } from "@/generated/graphql";
import { useMutation, useQuery } from "@apollo/client";
import CreateTodoDialog from "../todos/CreateTodoDialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import SmallIcon from "../styled-components/SmallIcon";
import { DeleteTask } from "@/graphql/mutations.graphql";
import { useDispatch } from "react-redux";
import { GetSingleTask } from "@/graphql/queries.graphql";
import { addTaskDetail, deleteTask as deleteTaskFromState } from "@/redux/features/taskSlice";
import { fullDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const TaskDetail = () => {
	const searchParams = useSearchParams();

	const todoChanged = useAppSelector((state) => state.todo.todoChange);
	const tasksWithoutDetails: Task[] = useAppSelector((state) => state.task.tasks);
	const tasksDetails: Task[] = useAppSelector((state) => state.task.tasksDetails);

	const selectedTaskId = +(searchParams.get("taskid") || tasksWithoutDetails?.[0]?.taskId);

	const singleTaskDetail =
		tasksDetails.find((task) => task?.taskId === selectedTaskId) || tasksDetails?.[0];
	const todos = singleTaskDetail?.todos || [];

	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const [loading, setLoading] = useState(true);

	const {
		error: _,
		data,
		loading: fetchLoading,
		refetch,
	} = useQuery(GetSingleTask, {
		variables: { taskId: selectedTaskId },
	});

	const [deleteTask, { error: deleteError }] = useMutation(DeleteTask);

	useEffect(() => {
		if (data) {
			const fetchedTaskDetail: Task = data.getSingleTask;
			dispatch(addTaskDetail(fetchedTaskDetail));
			setLoading(false);
		}
	}, [data, todoChanged, dispatch]);

	useEffect(() => {
		if (!fetchLoading) {
			setLoading(false);
		}
	}, [fetchLoading]);

	// after todo changed, refetch goals
	useEffect(() => {
		refetch({ taskId: selectedTaskId });
	}, [todoChanged, refetch, selectedTaskId]);

	if (loading && localStorage.getItem("taskDetails") == null) {
		return <div>Loading...</div>;
	}
	if (isNaN(selectedTaskId)) {
		return <div>Please select a goal</div>;
	}

	const handleDelete = async () => {
		console.log("delete");
		await deleteTask({
			variables: {
				taskId: selectedTaskId,
			},
		});
		if (deleteError) {
			console.log(deleteError.message);
		} else {
			dispatch(deleteTaskFromState(selectedTaskId));
			router.push("tasks?taskid=" + tasksWithoutDetails?.[0]?.taskId);
		}
	};

	return (
		<div className="relative bg-topbar p-2">
			<div className="flex items-center justify-between">
				<p className="text-2xl font-semibold">{singleTaskDetail?.title}</p>
				<p className="text-sm font-semibold">{`${fullDate(singleTaskDetail?.createdAt)}`}</p>
				<SmallIcon
					icon="material-symbols:delete-outline"
					className="text-3xl"
					handleClick={handleDelete}
				/>
			</div>

			<p className="truncate-overflow-7 col-span-2  text-sm">{singleTaskDetail?.description}</p>

			<section className=" py-4 ">
				{todos.length !== 0 ? (
					<div className="space-y-2">
						<div className="flex items-center justify-between  ">
							<p className="text-xl">Todos</p>
						</div>

						<ScrollArea className="h-[16rem] ">
							<div className="space-y-2">
								{todos.map((todo: Maybe<Todo>) => {
									return (
										<div key={todo?.todoId}>
											<TodoListItem
												key={todo?.todoId}
												todo={todo as Todo}
												href={`/tasks?todoid=${todo?.todoId}`}
												className="bg-sidebar"
												dragBtnStyle="hidden"
												isDashboard={false}
											/>
										</div>
									);
								})}
							</div>
						</ScrollArea>
					</div>
				) : (
					<div className="flex items-center justify-between bg-primary ">
						<p className="text-xl">Todos</p>
					</div>
				)}
			</section>

			{/* Milestone section */}
			<div className="flex items-center justify-center gap-4  p-2">
				<Icon icon="mdi:clock-fast" className="h-full text-6xl  " />
				<div className="space-y-1">
					<p className="text-sm">
						<span className="font-semibold">42 minutes </span>
						until your streeak resets!
					</p>
					<button title="Add Milestone" className="btn flex items-center gap-1 px-2 py-1 text-sm  ">
						<Icon icon="mdi:milestone-add" className="h-full text-lg  " />
						Add Milestone
					</button>
				</div>
			</div>

			<CreateTodoDialog />
		</div>
	);
};

export default TaskDetail;
