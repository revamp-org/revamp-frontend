"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TaskListItem from "../tasks/TaskListItem";
import { useQuery } from "@apollo/client";
import { GetTasksOfGoal } from "@/graphql/queries.graphql";
import { Task } from "@/generated/graphql";

const GoalDetail = () => {
	const searchParams = useSearchParams();
	const selectedGoal = searchParams.get("goalid");
	const [tasks, setTasks] = useState<Task[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const { error, data } = useQuery(GetTasksOfGoal, {
		variables: { goalId: selectedGoal },
	});

	useEffect(() => {
		if (data) {
			const fetchedTasks: Task[] = data.getTasksOfGoal;
			setTasks(fetchedTasks);
			setLoading(false);
		}
	}, [data]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div className="bg-topbar p-2">
			<div className="flex items-center justify-between">
				<p className="text-2xl font-semibold">{data?.title}</p>
				<p className="text-sm font-semibold">{data?.createdAt}</p>
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
					{/* Routine section */}
					<ScrollArea className="h-[16rem] ">
						{tasks.map((task: Task) => (
							<TaskListItem key={task.taskId} task={task} href={`tasks?taskid=${task.taskId}`} />
						))}
					</ScrollArea>
				</div>
			</section>
		</div>
	);
};

export default GoalDetail;
