"use client";
import TodoListItem from "./TodoListItem";
import TodoDndContextProvider from "@/lib/providers/TodoDndContextProvider";
import { useState, useEffect } from "react";
import { SortableContext } from "@dnd-kit/sortable";
import { Todo } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { GetTodosOfUser } from "@/graphql/queries.graphql";

const TodoList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const { user } = useUser();
	const [loading, setLoading] = useState<boolean>(true);

	const { error, data } = useQuery(GetTodosOfUser, {
		variables: { userId: user?.id },
	});

	useEffect(() => {
		if (data) {
			console.log("Data:", data);
			const fetchedTodos: Todo[] = data.getTodosOfUser;
			setTodos(fetchedTodos);
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
