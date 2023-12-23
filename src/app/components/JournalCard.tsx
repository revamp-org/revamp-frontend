"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineMinusCircle } from "react-icons/ai";
import { BsBookmarkPlus, BsBookmarkFill } from "react-icons/bs";
import { BiDotsHorizontal } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Journal } from "@/generated/graphql";
import { Avatar } from "@/components/ui/avatar";
import { Menu } from "@headlessui/react";
import Tag from "./Tag";
import { UserButton } from "@clerk/nextjs";

const JournalCard = ({ id, journal: journal }: { id: number; journal: Journal }) => {
	const [text, setText] = useState("");
	const [isBookmarked, setIsBookmarked] = useState<Boolean>(false);
	const [isInterested, setIsInterested] = useState<Boolean>(true);
	const router = useRouter();
	const [_isBookmarkPressed, setIsBookmarkPressed] = useState(false);

	const getPostTime = () => {
		const firebaseTimestamp = journal.date.seconds * 1000;

		const currentTimestamp = new Date().getTime();

		const timeDiff = currentTimestamp - firebaseTimestamp;

		const oneHour = 60 * 60 * 1000;
		const oneDay = 24 * oneHour;
		const oneWeek = 7 * oneDay;

		let formattedTime;

		if (timeDiff < oneHour) {
			const minutes = Math.floor(timeDiff / (60 * 1000));
			formattedTime = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
		} else if (timeDiff < oneDay) {
			const hours = Math.floor(timeDiff / oneHour);
			formattedTime = `${hours} hour${hours > 1 ? "s" : ""} ago`;
		} else if (timeDiff < oneWeek) {
			const days = Math.floor(timeDiff / oneDay);
			formattedTime = `${days} day${days > 1 ? "s" : ""} ago`;
		} else {
			const date = new Date(firebaseTimestamp);
			const month = date.toLocaleString("default", { month: "short" });
			const day = date.getDate();
			formattedTime = `${month} ${day}`;
		}

		return formattedTime;
	};

	return (
		<div className="relative flex w-full items-center justify-between rounded-sm border border-gray-400 p-2 lg:max-h-[20rem] ">
			{/* Post content tile and content */}
			<div className="grid   cursor-pointer grid-cols-3  py-4 lg:py-0 ">
				<div className="col-span-2 max-h-[40%]   ">
					<h2 className=" truncate-overflow-2 mb-2 text-base font-medium leading-6 lg:py-2  lg:text-lg">
						{journal.title}
					</h2>
					<p className="truncate-overflow-3 text-sm lg:text-lg">{text}</p>
				</div>
			</div>

			{/* Tags and options */}
			<div className="b right-0 mr-4 flex items-center gap-1">
				{!isBookmarked ? (
					<button
						onClick={() => {
							setIsBookmarked(true);
						}}
						title="Set Bookmark"
					>
						<BsBookmarkPlus className=" cursor-pointer  p-1 text-lg transition-all duration-150 ease-in-out hover:fill-green-700 lg:text-3xl" />
					</button>
				) : (
					<button
						onClick={() => {
							setIsBookmarked(false);
						}}
						title="Remove Bookmark"
					>
						<BsBookmarkFill className="cursor-pointer p-1 text-lg transition-all duration-150 ease-in-out hover:fill-red-500 lg:text-3xl" />
					</button>
				)}
				<button title="Not Interested" onClick={() => setIsInterested(!isInterested)}>
					<AiOutlineMinusCircle
						className={`journal-icon-temp   ${isInterested ? "" : "fill-red-500"}`}
					/>
				</button>
				<Menu>
					<Menu.Button title="More settings">
						<BiDotsHorizontal className="journal-icon-temp" />
					</Menu.Button>
					<Menu.Items className="absolute z-20 grid translate-x-4 translate-y-[calc(1.5rem_+_1rem_+_1rem)] place-items-start rounded-md bg-secondary px-2 text-foreground lg:translate-x-8 lg:translate-y-[calc(1.75rem_+_1.5rem_+_1.5rem)]">
						<Menu.Item disabled>
							<span className="flex w-full justify-center p-2 text-base opacity-75 lg:text-xl">
								{" "}
								<AiOutlineArrowUp />
							</span>
						</Menu.Item>

						<Menu.Item>
							{({ active }) => (
								<a
									className={`${active && "bg-blue-500"} p-1 text-xs lg:text-base`}
									href="/account-settings"
								>
									Mute this author
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active && "bg-blue-500"
									} w-full p-1 text-start text-xs lg:text-base`}
								>
									Report
								</button>
							)}
						</Menu.Item>
					</Menu.Items>
				</Menu>
			</div>
		</div>
	);
};
export default JournalCard;
