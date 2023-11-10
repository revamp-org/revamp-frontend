"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify/react";

const GoalListItem = ({
	id,
	title,
	streak,
	href,
}: {
	id: number;
	title: string;
	streak: number;
	href: string;
}) => {
	const searchParams = useSearchParams();

	const selectedGoal = searchParams.get("goalid");

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: id,
		data: {
			type: "Goal",
			id,
			title,
		},
	});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	if (isDragging) {
		<div className="h-12"> dragginag</div>;
	}

	return (
		<div ref={setNodeRef} style={style} className="flex h-12 items-center">
			<Link
				href={href}
				className={`flex h-full  w-full cursor-pointer  items-center justify-between bg-topbar pr-4 text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-[#446288] ${
					selectedGoal === id.toString() ? "bg-[#546287]" : "bg-topbar"
				}`}
			>
				<div className="flex h-full items-center gap-4">
					<span className="priority after:bg-white "></span>
					<p>{title}</p>
				</div>

				<div className="flex items-center gap-1">
					{streak && (
						<span className="flex items-center  text-2xl font-semibold">
							<Image src="/assets/fire.png" alt="streak" height={36} width={36} className="p-2" />
							12
						</span>
					)}
				</div>
			</Link>
			<span {...attributes} {...listeners} className="h-full bg-gray-400 bg-opacity-20 px-1  ">
				<Icon icon="grommet-icons:drag" className=" h-full text-2xl" />
			</span>
		</div>
	);
};

export default GoalListItem;
