"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify/react";

const TaskListItem = ({ id, title, href }: { id: number; title: string; href: string }) => {
	const searchParams = useSearchParams();

	const selectedTask = searchParams.get("taskid");

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: id,
		data: {
			type: "Task",
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
				href={href || ""}
				className={`flex h-full  w-full cursor-pointer  items-center justify-between bg-topbar pr-4 text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-[#446288] ${
					selectedTask === id.toString() ? "bg-[#546287]" : "bg-topbar"
				}`}
			>
				<div className="flex h-full items-center gap-4">
					<span className="priority after:bg-white "></span>
					<p>{title}</p>
				</div>
			</Link>
			<span {...attributes} {...listeners} className="h-full bg-gray-400 bg-opacity-20 px-1  ">
				<Icon icon="grommet-icons:drag" className=" h-full text-2xl" />
			</span>
		</div>
	);
};

export default TaskListItem;
