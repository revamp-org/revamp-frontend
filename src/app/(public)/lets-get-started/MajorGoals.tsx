"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Tag from "@/app/components/KeyTag";
import { useSearchParams, useRouter } from "next/navigation";
const majorGoals: string[] = [
	"fit",
	"gealthy diet",
	"reducing Stress",
	"better financial planning",
	"finding work-life balance",
	"skill development",
	"career growth",
	"social participaion",
	"positive self-talks",
	"quality sleep",
	"mindfulness",
	"being punctual",
	"emotional control",
	"time management",
];
const MajorGoals = () => {
	const params = useSearchParams();
	const [majorGoal, setMajorGoals] = useState<Set<string>>(
		new Set(params.get("majorGoal")?.split(",")),
	);

	const router = useRouter();
	useEffect(() => {
		const urlSearchParams = new URLSearchParams(params);
		const stringMajorGoal = Array.from(majorGoal).join(",");
		urlSearchParams.set("majorGoal", stringMajorGoal);
		router.replace(`?${urlSearchParams.toString()}`);
	}, [majorGoal, params, router]);
	return (
		<>
			<section className="pb-2 pt-10 md:pb-10">
				<div className=" mx-auto flex w-4/5 flex-col items-center md:flex-row">
					<div className="flex flex-col items-center justify-center py-1 text-center md:w-full md:flex-row lg:py-4">
						<div className="flex-1">
							<Image
								src="/assets/task-management.webp"
								alt="Questionnaire Set"
								width={500}
								height={800}
							/>
						</div>
					</div>
					<div className="flex flex-col flex-wrap content-center gap-3 text-left md:w-full md:text-left">
						<div className="mb-1 md:mb-3">
							<div className="items-left flex flex-col">
								<h1 className="mb-2 text-xl font-bold text-white md:mb-8 md:text-5xl">
									What are your goals ?
								</h1>
								<div className="flex flex-wrap gap-2 ">
									{majorGoals.map((mGoal, index) => (
										<Tag
											text={mGoal}
											setSelectedList={setMajorGoals}
											selectedList={majorGoal}
											key={index}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MajorGoals;
