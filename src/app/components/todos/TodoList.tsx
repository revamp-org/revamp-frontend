"use client";
import TodoListItem from "./TodoListItem";
import TodoDndContextProvider from "@/lib/providers/TodoDndContextProvider";
import { useState, useEffect } from "react";
import { SortableContext } from "@dnd-kit/sortable";
import { Todo } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { GetTodosOfUser } from "@/graphql/queries.graphql";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setTodos } from "@/redux/features/todoSlice";
import { useDispatch } from "react-redux";

const TodoList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const { user } = useUser();
	const [loading, setLoading] = useState<boolean>(true);

	const todos = useAppSelector((state) => state.todo.todos);
	const todoChanged = useAppSelector((state) => state.todo.todoChange);
	const dispatch = useDispatch<AppDispatch>();

	const {
		error: _,
		data,
		refetch,
	} = useQuery(GetTodosOfUser, {
		variables: { userId: user?.id },
	});

	useEffect(() => {
		if (data) {
			const fetchedTodos: Todo[] = data.getTodosOfUser;
			dispatch(setTodos(fetchedTodos));
			setLoading(false);
		}
	}, [data, dispatch]);

	// after goal changed, refetch goals
	useEffect(() => {
		refetch({ userId: user?.id });
	}, [todoChanged, refetch, user?.id]);

	if (loading && localStorage.getItem("todos") == null) {
		return <p>Loading...</p>;
	}

	return (
		<TodoDndContextProvider>
			<section className="space-y-2">
				<div>
					<p className="text-lg">Todos</p>
				</div>

				<ScrollArea className="h-[calc(100dvh-4rem-1.75rem-1rem)]">
					<div className="space-y-2">
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
					</div>
				</ScrollArea>
			</section>
		</TodoDndContextProvider>
	);
};

export default TodoList;
