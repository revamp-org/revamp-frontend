"use client";
import { useEffect, useState } from "react";
import CreateGoalDialog from "./CreateGoalDialog";
import { SortableContext } from "@dnd-kit/sortable";
import GoalListItem from "./GoalListItem";
import GoalDndContextProvider from "@/lib/providers/GoalDndContextProvider";
import { useQuery } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { GetGoals } from "@/graphql/queries.graphql";
import { Goal } from "@/generated/graphql";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setGoals } from "@/redux/features/goalSlice";
import { ScrollArea } from "@/components/ui/scroll-area";

type Column = {
	id: string;
	title: "Active" | "Inactive";
	goals: Goal[];
};

const GoalList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const { user } = useUser();
	const [loading, setLoading] = useState(true);
	const goalChanged = useAppSelector((state) => state.goal.goalChange);
	const goals: Goal[] = useAppSelector((state) => state.goal.goals);
	const dispatch = useDispatch<AppDispatch>();

	const { error, data, refetch } = useQuery(GetGoals, {
		variables: { userId: user?.id },
	});

	// initial data fetch
	useEffect(() => {
		if (data) {
			const fetchedGoals: Goal[] = data.getGoals;
			dispatch(setGoals(fetchedGoals));
			setLoading(false);
		}
	}, [data, dispatch]);

	// after goal changed, refetch goals
	useEffect(() => {
		refetch({ userId: user?.id });
	}, [goalChanged, refetch, user?.id]);

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
			goals: goals.filter((goal: Goal) => goal.isActive),
		},
		{
			id: "inactive",
			title: "Inactive",
			goals: goals.filter((goal: Goal) => !goal.isActive),
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

			<ScrollArea className="h-[calc(100dvh-4rem-1.75rem-1rem)]">
				<div className="space-y-2">
					<GoalDndContextProvider>
						{column.map((column: Column) => (
							<section key={column.id} className="space-y-2">
								{column.id === "active" || !isDashboardPage ? (
									<>
										{!isDashboardPage && <p className="">{column.title}</p>}
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
			</ScrollArea>
		</div>
	);
};

export default GoalList;
