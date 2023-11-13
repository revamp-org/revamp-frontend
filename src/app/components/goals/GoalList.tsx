"use client";
import { goalData } from "@/lib/data";
import { useEffect, useState } from "react";
import CreateGoalDialog from "./CreateGoalDialog";
import { SortableContext } from "@dnd-kit/sortable";
import GoalListItem from "./GoalListItem";
import GoalDndContextProvider from "@/lib/providers/GoalDndContextProvider";

type Column = {
	id: string;
	title: "Active" | "Inactive";
	goals: Goal[];
};

const GoalList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [goals, setGoals] = useState<Goal[]>(goalData);

	useEffect(() => {
		setGoals(goalData);
	}, []);

	const column: Column[] = [
		{
			id: "active",
			title: "Active",
			goals: goals.filter((goal: Goal) => goal.status === "active"),
		},
		{
			id: "inactive",
			title: "Inactive",
			goals: goals.filter((goal: Goal) => goal.status === "inactive"),
		},
	];

	return (
		<div className="space-y-2">
			<CreateGoalDialog />

			<GoalDndContextProvider setGoals={setGoals}>
				{column.map((column: Column) => (
					<section key={column.id} className="space-y-2">
						<p className="">{column.title}</p>
						<SortableContext items={column.goals.map((goal: Goal) => goal.goalId)}>
							{column.goals.map((goal: Goal) => (
								<GoalListItem
									key={goal.goalId}
									goal={goal}
									href={
										isDashboardPage
											? `dashboard/goals?goalid=${goal.goalId}`
											: `goals?goalid=${goal.goalId}`
									}
								/>
							))}
						</SortableContext>
					</section>
				))}
			</GoalDndContextProvider>
		</div>
	);
};

export default GoalList;
