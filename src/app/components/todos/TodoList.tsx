"use client";
import { todosData } from "@/lib/data";
import { Todo } from "@/lib/types";
import { useState } from "react";
import ListItem from "../ListItem";
import CreateTodoDialog from "./CreateTodoDialog";

const TodoList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [createTodo, setCreateTask] = useState<boolean>(false);
	return (
		<section className="space-y-2">
			<CreateTodoDialog />
			{todosData.map((todo: Todo) => (
				<ListItem
					key={todo.todoId}
					id={todo.todoId}
					title={todo.title}
					queryKey="todoid"
					href={
						isDashboardPage
							? `/dashboard/tasks?todoid=${todo.todoId}`
							: `/tasks?todoid=${todo.todoId}`
					}
				/>
			))}
		</section>
	);
};

export default TodoList;
