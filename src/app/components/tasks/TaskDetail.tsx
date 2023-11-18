"use client";
import { useSearchParams } from "next/navigation";
import { taskData, todoData } from "@/lib/data";
import { useEffect, useState } from "react";
import TodoListItem from "../todos/TodoListItem";
import CreateTaskDialog from "./CreateTask";
import Image from "next/image";
import { Icon } from "@iconify/react";

const TaskDetail = () => {
	const searchParams = useSearchParams();
	const selectedTask = searchParams.get("taskid");

	const [todoList, setTodoList] = useState<Todo[]>([]);
	const [relevantTask, setRelevantTask] = useState<Task>();
	const data = taskData.find((task: Task) => task.taskId.toString() === selectedTask);

	useEffect(() => {
		setTodoList(todoData.filter((todo: Todo) => todo.taskId.toString() === selectedTask));
		setRelevantTask(taskData.find((task: Task) => task.taskId.toString() === selectedTask));
	}, [selectedTask]);

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
				{todoList.length !== 0 ? (
					<div className="space-y-2">
						<div className="flex items-center justify-between  ">
							<p className="text-xl">Todos</p>
							<CreateTaskDialog />
						</div>
						{todoList.map((todo: Todo) => {
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
						className="grayscale"
					/>
				</div>
				<div className="col-span-2">
					<p>
						Complete all todos or create a checkpoint for your todo using milestone to prevent your
						streak being lost
					</p>
				</div>
			</section>
		</div>
	);
};

export default TaskDetail;
