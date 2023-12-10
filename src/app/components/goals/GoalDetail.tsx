"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TaskListItem from "../tasks/TaskListItem";
import { useMutation, useQuery } from "@apollo/client";
import { GetSingleGoal } from "@/graphql/queries.graphql";
import { Goal, Task } from "@/generated/graphql";
import SmallIcon from "../styled-components/SmallIcon";
import { DeleteGoal } from "@/graphql/mutations.graphql";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addGoalDetail, setGoals } from "@/redux/features/goalSlice";
import CreateTaskDialog from "../tasks/CreateTaskDialog";
import { fullDate } from "@/lib/utils";

const GoalDetail = () => {
	const searchParams = useSearchParams();
	const taskChanged = useAppSelector((state) => state.task.taskChange);
	const goals: Goal[] = useAppSelector((state) => state.goal.goals);
	const goalsDetails: Goal[] = useAppSelector((state) => state.goal.goalsDetails);

	const selectedGoal = searchParams.get("goalid") || goals[0]?.goalId;
	const selectedGoalId = +selectedGoal || -1;

	const singleGoalDetail = goalsDetails.find((goal) => goal?.goalId === selectedGoalId);
	const tasks = singleGoalDetail?.tasks || [];

	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();

	const {
		error: _,
		data,
		refetch,
	} = useQuery(GetSingleGoal, {
		variables: { goalId: selectedGoalId },
	});

	const [deleteGoal, { error: deleteError }] = useMutation(DeleteGoal);

	useEffect(() => {
		if (data) {
			const fetchedGoalDetail: Goal = data.getSingleGoal;
			dispatch(addGoalDetail(fetchedGoalDetail));
			setLoading(false);
		}
	}, [data, taskChanged, dispatch]);

	// after goal changed, refetch goals
	useEffect(() => {
		refetch({ goalId: selectedGoalId });
	}, [taskChanged, refetch, selectedGoalId]);

	if (loading) {
		return <p>Loading...</p>;
	}

	const handleDelete = () => {
		if (tasks.length > 0) {
			return;
		}
		deleteGoal({
			variables: {
				goalId: selectedGoalId,
			},
		});
		if (deleteError) {
			console.log(deleteError.message);
		} else {
			dispatch(setGoals(goals.filter((goal: Goal) => goal.goalId !== selectedGoalId)));
			router.replace("goals");
			console.log("deleted");
		}
	};

	return (
		<div className="relative bg-topbar p-2">
			<div className="flex items-center justify-between">
				<p className="text-2xl font-semibold">{singleGoalDetail?.title}</p>
				<p className="text-sm font-semibold">{`${fullDate(singleGoalDetail?.createdAt)}`}</p>
				<SmallIcon
					icon="material-symbols:delete-outline"
					className="text-3xl"
					handleClick={handleDelete}
				/>
			</div>

			<div className="">
				<p className="truncate-overflow-7 col-span-2  text-sm">{singleGoalDetail?.description}</p>
			</div>

			<section className="py-4">
				<div className="w-full">
					<h1 className="text-lg font-medium">Tasks</h1>
					{/* Task Section */}
					<ScrollArea className="h-[16rem] ">
						<div className="space-y-1">
							{tasks.map((task: Task) => (
								<TaskListItem
									key={task.taskId}
									className="h-12"
									linkStyle=" bg-[#3a506a]"
									task={task}
									href={`tasks?taskid=${task.taskId}`}
									isDashboard={false}
								/>
							))}
						</div>
					</ScrollArea>
				</div>
			</section>

			<section className="grid grid-cols-2 place-items-center">
				<div>
					<p className="text-lg">Commitment Streak</p>

					{singleGoalDetail?.streak === 0 ? (
						<div className=" ">
							<p className="text-center font-[Tourney] text-[length:--streak-font-size]">
								{singleGoalDetail.streak}
							</p>
							<p className="text-xl">{`It's the start of greatness`}</p>
						</div>
					) : (
						<div className="">
							<p className=" text-center font-[Tourney] text-[length:--streak-font-size]">
								{singleGoalDetail?.streak}
							</p>
							<p className="text-3xl">day streak!</p>
						</div>
					)}
				</div>
				<div>
					<Image
						src="/assets/fire.png"
						alt="fire image"
						height={120}
						width={120}
						className={`${true ? "filter-none" : "grayscale"}`}
					/>
				</div>
				<div className="col-span-2">
					<p className="text-sm font-extralight">
						Complete all todos or create a checkpoint for your todo using milestone to prevent your
						streak being lost
					</p>
				</div>
			</section>

			<CreateTaskDialog />
		</div>
	);
};

export default GoalDetail;
