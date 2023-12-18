"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TodoListItem from "../todos/TodoListItem";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Maybe, Task, Todo } from "@/generated/graphql";
import { GetTodosOfTask } from "@/graphql/queries.graphql";
import { useMutation, useQuery } from "@apollo/client";
import CreateTodoDialog from "../todos/CreateTodoDialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import SmallIcon from "../styled-components/SmallIcon";
import { DeleteTask } from "@/graphql/mutations.graphql";
import { useDispatch } from "react-redux";
import { GetSingleTask } from "@/graphql/queries.graphql";
import { addTaskDetail, deleteTask as deleteTaskFromState } from "@/redux/features/taskSlice";

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
		error,
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
		if (todos.length > 0) {
			return;
		}
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
				<div>
					<p className="text-2xl font-semibold">{singleTaskDetail?.title}</p>
					<p className="text-sm font-semibold">{singleTaskDetail?.createdAt}</p>
					<SmallIcon
						icon="material-symbols:delete-outline"
						className="text-3xl"
						handleClick={handleDelete}
					/>
				</div>
				<button title="Add Milestone">
					<Icon icon="mdi:milestone-add" className="h-full text-3xl  " />
				</button>
			</div>

			<p className="truncate-overflow-7 col-span-2  text-sm">{data?.description}</p>

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
						<p className="text-xl">Tasks</p>
					</div>
				)}
			</section>

			<section className="grid grid-cols-2 place-items-center">
				<div>
					<p className="text-lg">Commitment Streak</p>

					{singleTaskDetail?.streak === 0 ? (
						<div className=" ">
							<p className="text-center font-[Tourney] text-[length:--streak-font-size]">
								{singleTaskDetail.streak}
							</p>
							<p className="text-xl">{`It's the start of greatness`}</p>
						</div>
					) : (
						<div className="">
							<p className=" text-center font-[Tourney] text-[length:--streak-font-size]">0</p>
							<p className="text-3xl">day streak!</p>
						</div>
					)}
				</div>
			</section>

			<CreateTodoDialog />
		</div>
	);
};

export default TaskDetail;
