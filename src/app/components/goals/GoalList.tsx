"use client";
import Image from "next/image";
import { goalData } from "@/lib/data";
import { Goal } from "@/lib/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const GoalItem = ({ goal }: { goal: Goal }) => {
	const searchParams = useSearchParams();
	const selectedGoal = searchParams.get("goalid");

	return (
		<Link
			href={`?goalid=${goal.goalId}`}
			className={`flex h-12 cursor-pointer  items-center justify-between bg-topbar pr-4 text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-[#446288] ${
				selectedGoal === goal.goalId.toString() ? "bg-[#4462a8]" : "bg-topbar"
			}`}
		>
			<div className="flex h-full items-center gap-4">
				<span className="priority after:bg-white "></span>
				<p>{goal.title}</p>
			</div>
			<span className="flex items-center text-2xl font-semibold">
				<Image src="/assets/fire.png" alt="streak" height={36} width={36} className="p-2" />
				12
			</span>
		</Link>
	);
};

const GoalList = () => {
	return (
		<section className="space-y-2">
			{goalData.map((goal: Goal) => (
				<GoalItem key={goal.goalId} goal={goal} />
			))}
		</section>
	);
};

export default GoalList;
