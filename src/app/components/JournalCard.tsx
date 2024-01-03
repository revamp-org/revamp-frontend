"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Journal } from "@/generated/graphql";
import Link from "next/link";

const JournalCard = ({ id, journal: journal }: { id: number; journal: Journal }) => {
	return (
		<div className="relative flex items-center justify-between rounded-sm border border-gray-400 p-2 lg:max-h-[20rem] ">
			{/* Post content tile and content */}
			<div className="grid   cursor-pointer grid-cols-3  py-4 lg:py-0 ">
				<div className="col-span-2 max-h-[40%]   ">
					<Link
						href={`${journal.journalId}`}
						className=" truncate-overflow-2 mb-2 text-base font-medium leading-6 lg:py-2  lg:text-lg"
					>
						{journal.title}
					</Link>
					{/* <p className="truncate-overflow-3 text-sm lg:text-lg">{journal.content}</p> */}
				</div>
			</div>
		</div>
	);
};
export default JournalCard;
