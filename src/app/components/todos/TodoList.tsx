"use client";
import { todoData } from "@/lib/data";
import CreateTodoDialog from "./CreateTodoDialog";
import TodoListItem from "./TodoListItem";
import TodoDndContextProvider from "@/lib/providers/TodoDndContextProvider";
import { useState, useEffect } from "react";
import { SortableContext } from "@dnd-kit/sortable";

const TodoList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [todos, setTodos] = useState<Todo[]>(todoData);

	useEffect(() => {
		setTodos(todoData);
	}, []);

	return (
		<TodoDndContextProvider setTodos={setTodos}>
			<section className="space-y-2">
				<div>
					<p className="text-lg">Todos</p>
				</div>
				<SortableContext items={todos.map((todo: Todo) => todo.todoId)}>
					{todos.map((todo: Todo) => (
						<TodoListItem
							key={todo.todoId}
							todo={todo}
							href={
								isDashboardPage
									? `/dashboard/tasks?todoid=${todo.todoId}`
									: `/tasks?todoid=${todo.todoId}`
							}
						/>
					))}
				</SortableContext>
			</section>
		</TodoDndContextProvider>
	);
};

export default TodoList;
