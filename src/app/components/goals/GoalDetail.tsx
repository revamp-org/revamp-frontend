"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CircularProgress } from "@nextui-org/react";
import { addDays, eachDayOfInterval, format, startOfWeek, subDays } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import SmallIcon from "../styled-components/SmallIcon";
import { useSearchParams } from "next/navigation";
import { goalData } from "@/lib/data";
import { Goal } from "@/lib/types";

const RoutineItem = ({ title, repitation }: { title: string; repitation: string }) => {
	return (
		<div className="w-full bg-sidebar p-2">
			<div className="flex  items-start justify-between">
				<div>
					<p className="text-sm font-semibold">{title}</p>
					<p className="text-xs">{repitation}</p>
				</div>

				<button aria-label="Add a routine" className="rounded-sm bg-green-400 ">
					<Icon icon="ic:round-plus" className="text-xl" />
				</button>
			</div>

			{/* Routines and streak stat  */}
			<WeeklyActivity />
			<div className="flex items-center justify-between">
				<CircularProgress
					aria-label="progres bar"
					classNames={{
						svg: "w-3 h-4 drop-shadow-md",
						indicator: "stroke-white",
						track: "stroke-white/10",
						value: "text-xs  text-white",
					}}
					value={70}
					strokeWidth={12}
				/>

				<p className="ml-1 text-xs">100%</p>

				<div className="flex w-full justify-end gap-1 ">
					<SmallIcon icon="uil:calender" />
					<SmallIcon icon="material-symbols:task-alt" />
					<SmallIcon icon="gridicons:stats-alt" />
					<SmallIcon icon="bx:edit" />
					<SmallIcon icon="ri:more-fill" />
				</div>
			</div>
		</div>
	);
};

const WeeklyActivity = () => {
	const startDate = new Date();
	const endDate = subDays(startDate, 6);

	const allDays = eachDayOfInterval({
		start: endDate,
		end: startDate,
	});
	const dayDate = allDays.map((date) => format(date, "dd"));
	const dayNames = allDays.map((date) => format(date, "EEE"));
	return (
		<div>
			<div className="grid grid-cols-7 gap-1  ">
				{dayNames.map((dayName) => (
					<div key={dayName} className=" text-center">
						<p className="text-xs">{dayName}</p>
					</div>
				))}
				{dayDate.map((date) => (
					<div key={date} className="rounded-sm bg-[#02315e] p-1 text-center">
						<p className="text-xs">{date}</p>
					</div>
				))}
			</div>
		</div>
	);
};

const GoalDetail = () => {
	const searchParams = useSearchParams();
	const selectedGoal = searchParams.get("goalid");

	const data = goalData.find((goal: Goal) => goal.goalId.toString() === selectedGoal);

	return (
		<div className="bg-topbar p-2">
			<div className="flex items-center justify-between">
				<p className="text-2xl font-semibold">{data?.title}</p>
				<p className="text-sm font-semibold">{data?.date}</p>
			</div>

			<div className="grid grid-cols-3">
				<p className="truncate-overflow-7 col-span-2  text-sm">{data?.description}</p>
				<CircularProgress
					aria-label="progres bar"
					classNames={{
						svg: "w-36 h-36 drop-shadow-md",
						indicator: "stroke-white",
						track: "stroke-white/10",
						value: "text-3xl font-semibold text-white",
					}}
					value={70}
					strokeWidth={12}
					showValueLabel={true}
				/>
			</div>

			<section className="py-4">
				<div className="grid grid-cols-2 place-items-center  gap-2">
					<div className="w-full">
						<h1 className="text-lg font-medium">Routines</h1>
						{/* Routine section */}
						<ScrollArea className="h-[16rem] ">
							<RoutineItem title="Do exercise" repitation="Everyday" />
							<Separator className="my-2" />
							<RoutineItem title="Do exercise" repitation="Everyday" />
							<Separator className="my-2" />
							<RoutineItem title="Do exercise" repitation="Everyday" />
						</ScrollArea>
					</div>
					{/* Streak and stats */}
					<div className="">
						<div className="flex h-40 w-40 items-center rounded-full bg-gray-300 bg-opacity-10 p-8">
							<Image
								src="/assets/fire.png"
								alt="fire image"
								height={60}
								width={60}
								className="h-auto w-auto"
							/>
							<p className="text-4xl font-bold">20</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default GoalDetail;
