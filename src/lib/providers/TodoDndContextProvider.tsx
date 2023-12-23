"use client";
import React, { SetStateAction } from "react";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { createPortal } from "react-dom";
import { arrayMove } from "@dnd-kit/sortable";
import TodoListItem from "@/app/components/todos/TodoListItem";
import { Todo } from "@/generated/graphql";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setTodos } from "@/redux/features/todoSlice";

const TodoDndContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [activeCard, setActiveCard] = React.useState<Todo | null>(null);
	const todos = useAppSelector((state) => state.todo.todos);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<DndContext id="unique-todo-dnd-context-id" onDragStart={onDragStart} onDragEnd={onDragEnd}>
			{children}

			{typeof window !== "undefined"
				? createPortal(
						<DragOverlay>
							{activeCard && (
								<TodoListItem
									todo={activeCard}
									href={`/dashboard/todo?todoid=${activeCard.todoId}`}
									dragBtnStyle="text-red-500"
								/>
							)}
						</DragOverlay>,
						window.document.body,
				  )
				: null}
		</DndContext>
	);

	function onDragStart(event: DragStartEvent) {
		if (event.active.data.current?.type === "Todo") {
			console.log(event.active.data.current?.todo);
			setActiveCard(event.active.data.current?.todo);
			return;
		}
	}

	function onDragEnd(event: DragEndEvent) {
		const { active, over } = event;

		if (!over) return;

		console.log("Active ober", active, over);
		const activeTodoId = active.id;
		const overTodoId = over.id;

		if (activeTodoId === overTodoId) return;

		const overIndex = todos.findIndex((todo) => todo.todoId === over?.id);
		const activeIndex = todos.findIndex((todo) => todo.todoId === active?.id);

		const newTodos = arrayMove(todos, activeIndex, overIndex);

		dispatch(setTodos(newTodos));
	}
};

export default TodoDndContextProvider;
