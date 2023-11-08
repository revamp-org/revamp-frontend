"use client";
import { goalData } from "@/lib/data";
import { Goal } from "@/lib/types";
import { useState } from "react";
import CreateGoalDialog from "./CreateGoalDialog";
import ListItem from "../ListItem";

const GoalList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [createGoal, setCreateGoal] = useState<boolean>(false);
	return (
		<section className="space-y-2">
			<CreateGoalDialog />
			{goalData.map((goal: Goal) => (
				<ListItem
					key={goal.goalId}
					id={goal.goalId}
					title={goal.title}
					href={
						isDashboardPage
							? `dashboard/goals?goalid=${goal.goalId}`
							: `goals?goalid=${goal.goalId}`
					}
					queryKey="goalid"
					streak={12}
				/>
			))}
		</section>
	);
};

export default GoalList;
