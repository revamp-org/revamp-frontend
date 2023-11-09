"use client";
import React from "react";
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";

const DndContextProvider = ({ children }: { children: React.ReactNode }) => {
	return <DndContext onDragOver={onDragOver}>{children}</DndContext>;
};

function onDragOver(event: DragOverEvent) {
	const { active, over } = event;

	const isActiveTask = active.data.current?.type === "Task";
	const isOverTask = over?.data.current?.type === "Task";

	console.log(event, isActiveTask, isOverTask);
}

export default DndContextProvider;
