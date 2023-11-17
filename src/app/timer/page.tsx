"use client";
import { todoData } from "@/lib/data";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import TimerInput from "../components/styled-components/TimerInput";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button, Input } from "@nextui-org/react";

const TimerPage = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const params = searchParams?.goalid || searchParams?.taskid || searchParams?.todoid;
	const router = useRouter();
	const todo = todoData.filter((todo: Todo) => todo.todoId.toString() === params)[0];

	return (
		<div className="grid h-[100dvh] w-[100dvw] place-content-center bg-primary text-foreground">
			{/* title bar 	 */}
			<div className="flex  items-center gap-4">
				<button
					className="icon w-10 "
					onClick={() => router.push(`/dashboard/tasks?taskid=${todo.taskId}`)}
				>
					<Icon icon="ep:back" className="text-2xl" />
				</button>
				<p className="text-2xl">{todo?.todo}</p>
			</div>

			<Dialog>
				<DialogTrigger asChild>
					<p className="text-[10rem] text-foreground">
						<span>00</span>
						<span>:</span>
						<span>00</span>
						<span>:</span>
						<span>00</span>
					</p>
				</DialogTrigger>
				<DialogContent className="flex max-w-3xl justify-center">
					<form action="" className="text-foreground">
						<fieldset className="">
							<TimerInput labelName="Hour" />
							<span className="text-[10rem]">:</span>
							<TimerInput labelName="Minutes" />
							<span className="text-[10rem]">:</span>
							<TimerInput labelName="Seconds" />
						</fieldset>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default TimerPage;
