"use client";
import React, { SetStateAction } from "react";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import TaskListItem from "@/app/components/tasks/TaskListItem";
import { createPortal } from "react-dom";
import { arrayMove } from "@dnd-kit/sortable";

const TaskDndContextProvider = ({
	children,
	setTasks,
}: {
	children: React.ReactNode;
	setTasks: React.Dispatch<SetStateAction<Task[]>>;
}) => {
	const [activeCard, setActiveCard] = React.useState<Task | null>(null);
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

		setTasks((tasks) => {
			const overIndex = tasks.findIndex((task) => task.taskId === over?.id);
			const activeIndex = tasks.findIndex((task) => task.taskId === active?.id);

			return arrayMove(tasks, activeIndex, overIndex);
		});
	}
};

export default TaskDndContextProvider;
