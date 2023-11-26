"use client";
import GoalListItem from "@/app/components/goals/GoalListItem";
import { Goal } from "@/generated/graphql";
import { setGoals } from "@/redux/features/goalSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
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
import { useDispatch } from "react-redux";

const GoalDndContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [activeGoalCard, setActiveGoalCard] = useState<Goal | null>(null);
	const dispatch = useDispatch<AppDispatch>();
	const goals: Goal[] = useAppSelector((state) => state.goal.goals);
	return (
		<DndContext
			id="goal-context-id"
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDragEnd={onDragEnd}
		>
			{children}

			{typeof window !== "undefined"
				? createPortal(
					<DragOverlay>
						{activeGoalCard && (
							<GoalListItem
								goal={activeGoalCard}
								href={`/dashboard/goals?goalid=${activeGoalCard.goalId}`}
							/>
						)}
					</DragOverlay>,
					window.document.body,
				)
				: null}
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

		const overIndex = goals.findIndex((goal) => goal.goalId === over?.id);
		const activeIndex = goals.findIndex((goal) => goal.goalId === active?.id);
		const newGoals = arrayMove(goals, activeIndex, overIndex);
		console.log("hwllo from dnd", newGoals);
		dispatch(setGoals(newGoals));
		// console.log(event);
	}

	function onDragOver(event: DragOverEvent) {
		const { active, over } = event;

		if (!over) return;

		const activeGoalId = active.id;
		const overGoalId = over.id;

		if (activeGoalId === overGoalId) return;

		const overIndex = goals.findIndex((goal) => goal.goalId === over?.id);
		const activeIndex = goals.findIndex((goal) => goal.goalId === active?.id);

		if (goals[overIndex].isActive !== goals[activeIndex].isActive) {
			goals[activeIndex].isActive = goals[overIndex].isActive;
		}

		const newGoals = arrayMove(goals, activeIndex, overIndex);

		console.log("hwllo from dnd ovber", newGoals);
		dispatch(setGoals(newGoals));
	}
};

export default GoalDndContextProvider;
