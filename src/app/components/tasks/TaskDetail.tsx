"use client";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { taskData, todoData } from "@/lib/data";
import { useEffect, useState } from "react";
import TodoListItem from "../todos/TodoListItem";
import CreateTaskDialog from "./CreateTask";

const TaskDetail = () => {
	const searchParams = useSearchParams();
	const selectedTask = searchParams.get("taskid");

	const [todoList, setTodoList] = useState<Todo[]>([]);
	const data = taskData.find((task: Task) => task.taskId.toString() === selectedTask);

	useEffect(() => {
		setTodoList(todoData.filter((todo: Todo) => todo.taskId.toString() === selectedTask));
	}, [selectedTask]);

	return (
		<div className="bg-topbar p-2">
			<div className="flex items-center justify-between">
				<p className="text-2xl font-semibold">{data?.title}</p>
				<p className="text-sm font-semibold">{data?.createdAt}</p>
			</div>

			<p className="truncate-overflow-7 col-span-2  text-sm">
				Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
				ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
				officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
				dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea
				nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
				officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
				officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
				Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
			</p>

			<section className=" py-4 ">
				{todoList.length !== 0 ? (
					<div className="space-y-2">
						<div className="flex items-center justify-between bg-primary ">
							<p className="text-xl">Tasks</p>
							<CreateTaskDialog />
						</div>
						{todoList.map((todo: Todo) => {
							return (
								<div key={todo.todoId}>
									<TodoListItem
										key={todo.todoId}
										todo={todo}
										href={`/tasks?todoid=${todo.todoId}`}
										className="bg-primary"
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
		</div>
	);
};

export default TaskDetail;
