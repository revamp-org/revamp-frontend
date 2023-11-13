"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify/react";

const GoalListItem = ({ goal, href }: { goal: Goal; href: string }) => {
	const searchParams = useSearchParams();

	const selectedGoal = searchParams.get("goalid");

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: goal?.goalId,
		data: {
			type: "Goal",
			goal,
		},
	});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	if (isDragging) {
		return (
			<div
				ref={setNodeRef}
				style={style}
				className="flex h-12 items-center border-2 border-topbar bg-topbar opacity-60 "
			></div>
		);
	}

	return (
		<div ref={setNodeRef} style={style} className="flex h-12 items-center text-foreground">
			<Link
				aria-label="Goal tag"
				href={href}
				className={`flex h-full  w-full cursor-pointer  items-center justify-between  pr-4 text-xl  transition-all duration-300 ease-in-out hover:bg-[#446288] ${selectedGoal === goal?.goalId.toString() ? "bg-[#446288]" : "bg-topbar"
					}`}
			>
				<div className="flex h-full items-center gap-4">
					<span className="priority after:bg-white "></span>
					<p>{goal?.title}</p>
				</div>

				<span className="flex items-center gap-1  text-xl font-semibold ">
					<Image src="/assets/fire.png" alt="streak" height={24} width={24} />
					{goal?.streak}
				</span>
			</Link>
			<span
				aria-label=""
				{...attributes}
				{...listeners}
				className="h-full bg-gray-400 bg-opacity-20 px-1  "
			>
				<Icon icon="grommet-icons:drag" className=" h-full text-2xl" />
			</span>
		</div>
	);
};

export default GoalListItem;
