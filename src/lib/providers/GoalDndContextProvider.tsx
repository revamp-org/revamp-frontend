"use client";
import GoalListItem from "@/app/components/goals/GoalListItem";
import {
	DndContext,
	DragEndEvent,
	DragOverEvent,
	DragOverlay,
	DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import { createPortal } from "react-dom";

const GoalDndContextProvider = ({
	children,
	setGoals,
}: {
	children: React.ReactNode;
	setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
}) => {
	const [activeGoalCard, setActiveGoalCard] = useState<Goal | null>(null);
	return (
		<DndContext
			id="goal-context-id"
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDragEnd={onDragEnd}
		>
			{children}

			{createPortal(
				<DragOverlay>
					{activeGoalCard && (
						<GoalListItem
							goal={activeGoalCard}
							href={`/dashboard/goals?goalid=${activeGoalCard.goalId}`}
						/>
					)}
				</DragOverlay>,
				document.body,
			)}
		</DndContext>
	);

	function onDragStart(event: DragStartEvent) {
		setActiveGoalCard(event.active.data.current?.goal);
		return;
	}
	function onDragEnd(event: DragEndEvent) {
		const { active, over } = event;

		if (!over) return;

		const activeGoalId = active.id;
		const overGoalId = over.id;

		if (activeGoalId === overGoalId) return;

		setGoals((goals) => {
			const overIndex = goals.findIndex((goal) => goal.goalId === over?.id);
			const activeIndex = goals.findIndex((goal) => goal.goalId === active?.id);
			return arrayMove(goals, activeIndex, overIndex);
		});

		// console.log(event);
	}

	function onDragOver(event: DragOverEvent) {
		const { active, over } = event;

		if (!over) return;

		const activeGoalId = active.id;
		const overGoalId = over.id;

		if (activeGoalId === overGoalId) return;

		setGoals((goals) => {
			const overIndex = goals.findIndex((goal) => goal.goalId === over?.id);
			const activeIndex = goals.findIndex((goal) => goal.goalId === active?.id);

			if (goals[overIndex].status !== goals[activeIndex].status) {
				goals[activeIndex].status = goals[overIndex].status;
			}

			return arrayMove(goals, activeIndex, overIndex);
		});
	}
};

export default GoalDndContextProvider;
