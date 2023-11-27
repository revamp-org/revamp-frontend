"use client";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import TimerInput from "../components/styled-components/TimerInput";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/store";
import { Todo } from "@/generated/graphql";

const TimerPage = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const params = searchParams?.goalid || searchParams?.taskid || searchParams?.todoid;
	const router = useRouter();

	const todos = useAppSelector((state) => state.todo.todos);
	const todo = todos.filter((todo: Todo) => todo.todoId.toString() === params)[0];

	const [hours, setHours] = useState<string>("00");
	const [minutes, setMinutes] = useState<string>("00");
	const [seconds, setSeconds] = useState<string>("00");

	return (
		<div className="grid h-[100dvh] w-[100dvw] place-content-center bg-primary text-foreground">
			{/* title bar 	 */}
			<div className="flex  items-center gap-4">
				<button
					className="icon w-10 "
					onClick={() => router.push(`/dashboard/tasks?taskid=${todo.todoId}`)}
				>
					<Icon icon="ep:back" className="text-2xl" />
				</button>
				<p className="text-2xl">{todo?.todo}</p>
			</div>

			<Dialog>
				<DialogTrigger asChild>
					<p className="text-[10rem] text-foreground">
						<span>{hours}</span>
						<span>:</span>
						<span>{minutes}</span>
						<span>:</span>
						<span>{seconds}</span>
					</p>
				</DialogTrigger>
				<DialogContent className="flex max-w-3xl justify-center">
					<form action="" className="text-foreground">
						<fieldset className="">
							<TimerInput labelName="Hour" timer={hours} setTimer={setHours} />
							<span className="text-[10rem]">:</span>
							<TimerInput labelName="Minutes" timer={minutes} setTimer={setMinutes} />
							<span className="text-[10rem]">:</span>
							<TimerInput labelName="Seconds" timer={seconds} setTimer={setSeconds} />
						</fieldset>
					</form>
					<DialogClose asChild className="absolute bottom-4  ">
						<Button type="button" variant="secondary">
							Start
						</Button>
					</DialogClose>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default TimerPage;
