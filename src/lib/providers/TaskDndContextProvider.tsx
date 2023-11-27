"use client";
import React, { SetStateAction } from "react";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import TaskListItem from "@/app/components/tasks/TaskListItem";
import { createPortal } from "react-dom";
import { arrayMove } from "@dnd-kit/sortable";
import { Task } from "@/generated/graphql";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setTasks } from "@/redux/features/taskSlice";

const TaskDndContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [activeCard, setActiveCard] = React.useState<Task | null>(null);
	const tasks = useAppSelector((state) => state.task.tasks);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<DndContext id="unique-dnd-context-id" onDragStart={onDragStart} onDragEnd={onDragEnd}>
			{children}

			{typeof window !== "undefined"
				? createPortal(
					<DragOverlay>
						{activeCard && (
							<TaskListItem
								task={activeCard}
								href={`/dashboard/tasks?taskid=${activeCard.taskId}`}
							/>
						)}
					</DragOverlay>,
					window.document.body,
				)
				: null}
		</DndContext>
	);

	function onDragStart(event: DragStartEvent) {
		if (event.active.data.current?.type === "Task") {
			setActiveCard(event.active.data.current?.task);
			return;
		}
	}

	function onDragEnd(event: DragEndEvent) {
		const { active, over } = event;

		if (!over) return;

		const activeTaskId = active.id;
		const overTaskId = over.id;

		if (activeTaskId === overTaskId) return;

		const overIndex = tasks.findIndex((task) => task.taskId === over?.id);
		const activeIndex = tasks.findIndex((task) => task.taskId === active?.id);

		const newTasks = arrayMove(tasks, activeIndex, overIndex);

		dispatch(setTasks(newTasks));
	}
};

export default TaskDndContextProvider;
