"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { goalData } from "@/lib/data";

const TaskListItem = ({
	task,
	href,
	dragBtnStyle,
}: {
	task: Task;
	href: string;
	dragBtnStyle?: string;
}) => {
	const searchParams = useSearchParams();

	const selectedTask = searchParams.get("taskid");
	const relevantGoal = goalData.find((goal: Goal) => goal.goalId === task.goalId);

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: task.taskId,
		data: {
			type: "Task",
			task,
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
		<div ref={setNodeRef} style={style} className="flex h-16 items-center text-foreground">
			<Link
				href={href || ""}
				className={`relative flex h-full  w-full cursor-pointer  items-center justify-between  pr-4 text-xl  transition-all duration-300 ease-in-out hover:bg-[#446288] ${
					selectedTask === task.taskId.toString() ? "bg-[#446288]" : "bg-topbar"
				}`}
			>
				<div className="flex h-full items-center gap-4 ">
					<span className="priority after:bg-white "></span>
					<div className="">
						<p>{task.title}</p>

						<p className="text-xs font-extralight">From {relevantGoal?.title}</p>
					</div>
				</div>

				<span className="flex items-center gap-1  text-xl font-semibold ">
					<Image src="/assets/fire.png" alt="streak" height={24} width={24} />
					{task?.streak}
				</span>
			</Link>
			<span
				{...attributes}
				{...listeners}
				className={cn("h-full bg-gray-400 bg-opacity-20 px-1  ", dragBtnStyle)}
			>
				<Icon icon="iconamoon:menu-burger-horizontal-thin" className="h-full text-2xl  " />
			</span>
		</div>
	);
};

export default TaskListItem;
