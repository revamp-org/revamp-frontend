"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TodoListItem from "../todos/TodoListItem";
import CreateTaskDialog from "./CreateTask";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useAppSelector } from "@/redux/store";
import { Todo } from "@/generated/graphql";
import { GetTodosOfTask } from "@/graphql/queries.graphql";
import { useQuery } from "@apollo/client";

const TaskDetail = () => {
	const searchParams = useSearchParams();
	const selectedTask = searchParams.get("taskid");
	const [todos, setTodos] = useState<Todo[]>([]);
	const [allTodosCompleted, setAllTodosCompleted] = useState<boolean>(false);
	const isCheckboxChecked = useAppSelector((state) => state.task.isCheckboxChecked);
	const [loading, setLoading] = useState<boolean>(true);

	const { error, data } = useQuery(GetTodosOfTask, {
		variables: { taskId: selectedTask },
	});

	useEffect(() => {
		if (data) {
			const fetchedTodos: Todo[] = data.getTodosOfTask;
			setTodos(fetchedTodos);
			setLoading(false);
		}
	}, [data]);

	useEffect(() => {
		const areAllTodosCompleted = todos.every((todo: Todo) => todo.isDone);
		setAllTodosCompleted(areAllTodosCompleted);
	}, [todos, isCheckboxChecked]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div className="bg-topbar p-2">
			<div className="flex items-center justify-between">
				<div>
					<p className="text-2xl font-semibold">{data?.title}</p>
					<p className="text-sm font-semibold">{data?.createdAt}</p>
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
							<CreateTaskDialog />
						</div>
						{todos.map((todo: Todo) => {
							return (
								<div key={todo.todoId}>
									<TodoListItem
										key={todo.todoId}
										todo={todo}
										href={`/tasks?todoid=${todo.todoId}`}
										className="bg-sidebar"
										dragBtnStyle="hidden"
									/>
								</div>
							);
						})}
					</div>
				) : (
					<div className="flex items-center justify-between bg-primary ">
						<p className="text-xl">Tasks</p>
						<CreateTaskDialog />
					</div>
				)}
			</section>

			<section className="grid grid-cols-2 place-items-center">
				<div>
					<p className="text-lg">Commitment Streak</p>

					{data?.streak === 0 ? (
						<span className="bg-red-500">
							{data.streak}
							<p>{`It's the start of greatness`}</p>
						</span>
					) : (
						<span className=" bg-red-500">
							<p className=" font-[Tourney] text-[length:--streak-font-size]">{data?.streak}</p>
							<p className="text-3xl">day streak!</p>
						</span>
					)}
				</div>
				<div>
					<Image
						src="/assets/fire.png"
						alt="fire image"
						height={120}
						width={120}
						className={`${allTodosCompleted ? "filter-none" : "grayscale"}`}
					/>
				</div>
				<div className="col-span-2">
					<p className="text-sm font-extralight">
						Complete all todos or create a checkpoint for your todo using milestone to prevent your
						streak being lost
					</p>
				</div>
			</section>
		</div>
	);
};

export default TaskDetail;
