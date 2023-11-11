"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify/react";

const TodoListItem = ({ todo, href }: { todo: Todo; href: string }) => {
	const searchParams = useSearchParams();

	const selectedTodo = searchParams.get("todoid");

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
		<div className="h-12"> dragginag</div>;
	}

	return (
		<div ref={setNodeRef} style={style} className="flex h-12 items-center">
			<Link
				href={href || ""}
				className={`flex h-full  w-full cursor-pointer  items-center justify-between bg-topbar pr-4 text-xl  transition-all duration-300 ease-in-out hover:bg-[#446288] ${selectedTodo === todo.todoId.toString() ? "bg-[#546287]" : "bg-topbar"
					}`}
			>
				<div className="flex h-full items-center gap-4">
					<span className="priority after:bg-white "></span>
					<p>{todo.todo}</p>
				</div>
			</Link>
			<span {...attributes} {...listeners} className="h-full bg-gray-400 bg-opacity-20 px-1  ">
				<Icon icon="grommet-icons:drag" className=" h-full text-2xl" />
			</span>
		</div>
	);
};

export default TodoListItem;
