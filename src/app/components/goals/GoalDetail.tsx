"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TaskListItem from "../tasks/TaskListItem";
import { useMutation, useQuery } from "@apollo/client";
import { GetTasksOfGoal } from "@/graphql/queries.graphql";
import { Goal, Task } from "@/generated/graphql";
import SmallIcon from "../styled-components/SmallIcon";
import { DeleteGoal } from "@/graphql/mutations.graphql";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setGoals } from "@/redux/features/goalSlice";
import CreateTaskDialog from "../tasks/CreateTask";

const GoalDetail = () => {
	const searchParams = useSearchParams();
	const selectedGoal = searchParams.get("goalid");
	const selectedGoalId = +selectedGoal!;
	const [tasks, setTasks] = useState<Task[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();

	const goals: Goal[] = useAppSelector((state) => state.goal.goals);
	const dispatch = useDispatch<AppDispatch>();

	const { error, data } = useQuery(GetTasksOfGoal, {
		variables: { goalId: selectedGoalId },
	});

	const [deleteGoal, { error: deleteError }] = useMutation(DeleteGoal);

	useEffect(() => {
		if (data) {
			const fetchedTasks: Task[] = data.getTasksOfGoal;
			setTasks(fetchedTasks);
			setLoading(false);
		}
	}, [data]);

	if (error) {
		return <p>Error: {error.message}</p>;
	}

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
				<p className="text-2xl font-semibold">{data?.title}</p>
				<p className="text-sm font-semibold">{data?.createdAt}</p>
				<SmallIcon
					icon="material-symbols:delete-outline"
					className="text-3xl"
					handleClick={handleDelete}
				/>
			</div>

			<div className="grid grid-cols-3">
				<p className="truncate-overflow-7 col-span-2  text-sm">{data?.description}</p>

				{/* Streak and stats */}
				<div className="">
					<div className="flex h-40 w-40 items-center rounded-full bg-gray-300 bg-opacity-10 p-8">
						<Image
							src="/assets/fire.png"
							alt="fire image"
							height={60}
							width={60}
							className="h-auto w-auto"
						/>
						<p className="text-4xl font-bold">20</p>
					</div>
				</div>
			</div>

			<section className="py-4">
				<div className="w-full">
					<h1 className="text-lg font-medium">Tasks</h1>
					{/* Task Section */}
					<ScrollArea className="h-[16rem] ">
						{tasks.map((task: Task) => (
							<TaskListItem key={task.taskId} task={task} href={`tasks?taskid=${task.taskId}`} />
						))}
					</ScrollArea>
				</div>
			</section>

			{/* <SmallIcon */}
			{/* 	icon="material-symbols:add" */}
			{/* 	className="absolute bottom-4 right-4 rounded-full bg-gray-500 p-2 text-5xl" */}
			{/* /> */}
			<CreateTaskDialog />
		</div>
	);
};

export default GoalDetail;
