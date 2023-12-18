"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TaskListItem from "../tasks/TaskListItem";
import { useMutation, useQuery } from "@apollo/client";
import { GetSingleGoal } from "@/graphql/queries.graphql";
import { Goal, Task } from "@/generated/graphql";
import { DeleteGoal } from "@/graphql/mutations.graphql";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addGoalDetail, deleteGoal as deleteGoalFromState } from "@/redux/features/goalSlice";
import CreateTaskDialog from "../tasks/CreateTaskDialog";
import { fullDate } from "@/lib/utils";
import { MenuPopover } from "../MenuPopover";

const GoalDetail = () => {
	const searchParams = useSearchParams();
	const taskChanged = useAppSelector((state) => state.task.taskChange);
	const goalsWithoutDetails: Goal[] = useAppSelector((state) => state.goal.goals);
	const goalsDetails: Goal[] = useAppSelector((state) => state.goal.goalsDetails);

	const selectedGoalId = +(searchParams.get("goalid") || goalsWithoutDetails?.[0]?.goalId);

	const singleGoalDetail =
		goalsDetails.find((goal) => goal?.goalId === selectedGoalId) || goalsDetails?.[0];
	const tasks = singleGoalDetail?.tasks || [];

	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const [loading, setLoading] = useState(true);

	const {
		error,
		data,
		loading: fetchLoading,
		refetch,
	} = useQuery(GetSingleGoal, {
		variables: { goalId: selectedGoalId },
	});

	const [deleteGoal, { error: deleteError }] = useMutation(DeleteGoal);

	useEffect(() => {
		if (data) {
			const fetchedGoalDetail: Goal = data.getSingleGoal;
			dispatch(addGoalDetail(fetchedGoalDetail));
		}
	}, [data, taskChanged, dispatch]);

	useEffect(() => {
		if (!fetchLoading) {
			setLoading(false);
		}
	}, [fetchLoading]);

	// after goal changed, refetch goals
	useEffect(() => {
		refetch({ goalId: selectedGoalId });
	}, [taskChanged, refetch, selectedGoalId]);

	if (loading && singleGoalDetail == null) {
		return <p>Loading...</p>;
	}

	if (isNaN(selectedGoalId)) {
		return <p>Please select a goal</p>;
	}

	const handleDelete = async () => {
		if (tasks.length > 0) {
			return;
		}
		await deleteGoal({
			variables: {
				goalId: selectedGoalId,
			},
		});
		if (deleteError) {
			console.log(deleteError.message);
		} else {
			dispatch(deleteGoalFromState(selectedGoalId));
			router.push("goals?goalid=" + goalsWithoutDetails?.[0]?.goalId);
		}
	};

	return (
		<div className="relative bg-topbar p-2">
			<div className="flex items-center justify-between">
				<p className="text-2xl font-semibold">{singleGoalDetail?.title}</p>
				<p className="text-sm font-semibold">{`${fullDate(singleGoalDetail?.createdAt)}`}</p>
				<MenuPopover deleteItem={handleDelete} />
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

			<section className="absolute bottom-8 grid grid-cols-2 place-items-center">
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
					<p className="mx-auto max-w-[80%] text-sm font-extralight">
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
