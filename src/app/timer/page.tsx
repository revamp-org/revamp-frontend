"use client";
import { todoData } from "@/lib/data";
import { Icon } from "@iconify/react";

const TimerPage = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const params = searchParams?.goalid || searchParams?.todoid || searchParams?.todoid;
	const todo = todoData.filter((todo: Todo) => todo.todoId.toString() === params)[0];
	return (
		<div className="grid h-[100dvh] w-[100dvw] place-content-center bg-primary text-foreground">
			{/* title bar 	 */}
			<div className="flex  items-center gap-4">
				<button className="icon w-10 ">
					<Icon icon="ep:back" className=" text-2xl  " />
				</button>
				<p className="text-2xl">{todo?.todo}</p>
			</div>
			<p className="text-[10rem]">00:00:00</p>
		</div>
	);
};

export default TimerPage;
