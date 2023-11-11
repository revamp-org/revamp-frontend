"use client";
import { goalData } from "@/lib/data";
import { useState } from "react";
import CreateGoalDialog from "./CreateGoalDialog";
import { SortableContext } from "@dnd-kit/sortable";
import GoalListItem from "./GoalListItem";

const GoalList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [createGoal, setCreateGoal] = useState<boolean>(false);
	return (
		<div className="space-y-2">
			<CreateGoalDialog />
			<section className="space-y-2">
				<p className="">Active</p>
				<SortableContext items={goalData.map((goal: Goal) => goal.goalId)}>
					{goalData.map((goal: Goal) => (
						<GoalListItem
							key={goal.goalId}
							id={goal.goalId}
							title={goal.title}
							href={
								isDashboardPage
									? `dashboard/goals?goalid=${goal.goalId}`
									: `goals?goalid=${goal.goalId}`
							}
							streak={12}
						/>
					))}
				</SortableContext>
			</section>

			<section className="space-y-2">
				<p className="">InActive</p>
				{goalData.map((goal: Goal) => (
					<GoalListItem
						key={goal.goalId}
						id={goal.goalId}
						title={goal.title}
						href={
							isDashboardPage
								? `dashboard/goals?goalid=${goal.goalId}`
								: `goals?goalid=${goal.goalId}`
						}
						streak={12}
					/>
				))}
			</section>
		</div>
	);
};

export default GoalList;
