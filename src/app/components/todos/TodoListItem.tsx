"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { taskData } from "@/lib/data";

const TodoListItem = ({
	todo,
	href,
	dragBtnStyle,
	className,
}: {
	todo: Todo;
	href: string;
	dragBtnStyle?: string;
	className?: string;
}) => {
	const searchParams = useSearchParams();
	const selectedTodo = searchParams.get("todoid");
	const router = useRouter();
	const relevantTask = taskData.find((task: Task) => task.taskId === todo.taskId);

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: todo.todoId,
		data: {
			type: "Todo",
			todo,
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
				className={cn(
					"flex h-12 items-center border-2 border-topbar bg-topbar opacity-60",
					className,
				)}
			></div>
		);
	}

	return (
		<div ref={setNodeRef} style={style} className="flex h-16 items-center">
			<div
				className={cn(
					`flex h-full w-full   items-center  justify-between pr-4  text-xl text-foreground  transition-all duration-300 ease-in-out hover:bg-[#446288] ${
						selectedTodo === todo.todoId.toString() ? "bg-[#446288]" : "bg-topbar"
					}`,
					className,
				)}
			>
				<Link
					href={href}
					className="group flex h-full w-full cursor-pointer  items-center space-x-4 "
				>
					<span className="priority after:bg-white "></span>
					<div>
						<p>{todo.todo}</p>

						<p className="text-xs">From {relevantTask?.title}</p>
					</div>
				</Link>

				<div>
					<button
						className="btn h-full  px-1"
						title="Timer"
						onClick={() => router.push(`/timer?taskid=${todo.todoId}`)}
					>
						<Icon icon="material-symbols:timer-outline" className="h-full text-2xl  " />
					</button>
				</div>
			</div>
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

export default TodoListItem;
