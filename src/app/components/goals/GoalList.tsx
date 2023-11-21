"use client";
import { useEffect, useState } from "react";
import CreateGoalDialog from "./CreateGoalDialog";
import { SortableContext } from "@dnd-kit/sortable";
import GoalListItem from "./GoalListItem";
import GoalDndContextProvider from "@/lib/providers/GoalDndContextProvider";
import { useQuery } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { GET_GOALS } from "../../../../graphql/queries";

type Column = {
	id: string;
	title: "Active" | "Inactive";
	goals: Goal[];
};

const GoalList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [goals, setGoals] = useState<Goal[]>([]);
	const { user } = useUser();

	const { loading, error, data } = useQuery(GET_GOALS, {
		variables: { userId: user?.id },
	});

	useEffect(() => {
		if (data) {
			console.log("Data:", data);
			const fetchedGoals = data.getGoals;
			setGoals(fetchedGoals || []);
		}
	}, [data]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	const handleOnClick = () => {
		console.log("clicked", data?.getGoals);
	};

	const column: Column[] = [
		{
			id: "active",
			title: "Active",
			goals: goals.filter((goal: Goal) => goal.status === "active"),
		},
		{
			id: "inactive",
			title: "Inactive",
			goals: goals?.filter((goal: Goal) => goal.status === "inactive"),
		},
	];

	return (
		<div className="space-y-2">
			<div className="flex items-center justify-between">
				<p className="text-lg" onClick={handleOnClick}>
					Goals
				</p>
				{!isDashboardPage ? <CreateGoalDialog /> : null}
			</div>

			<GoalDndContextProvider setGoals={setGoals}>
				{column.map((column: Column) => (
					<section key={column.id} className="space-y-2">
						{column.id === "active" || !isDashboardPage ? (
							<>
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
							</>
						) : null}
					</section>
				))}
			</GoalDndContextProvider>
		</div>
	);
};

export default GoalList;
