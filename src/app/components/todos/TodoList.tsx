"use client";
import { todoData } from "@/lib/data";
import { useState } from "react";
import CreateTodoDialog from "./CreateTodoDialog";
import TodoListItem from "./TodoListItem";

const TodoList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [createTodo, setCreateTask] = useState<boolean>(false);
	return (
		<section className="space-y-2">
			<CreateTodoDialog />
			{todoData.map((todo: Todo) => (
				<TodoListItem
					key={todo.todoId}
					id={todo.todoId}
					title={todo.todo}
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
