"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Tag from "@/app/components/KeyTag";
import { useRouter, useSearchParams } from "next/navigation";
const improveAreas: string[] = [
	"Physical Health",
	"Mental Wellbeing",
	"Emotional Wellbeing",
	"Financial Planning",
	"Environmental Awareness",
	"Social Participation",
	"Safety",
	"Career Satisfaction",
];
const AreasToImprove = ({ page }: { page: number }) => {
	const params = useSearchParams();
	const [selectedAreas, setSelectedAreas] = useState<Set<string>>(
		new Set(params.get("selectedAreas")?.split(",")),
	);
	const router = useRouter();
	useEffect(() => {
		const urlSearchParams = new URLSearchParams(params);
		const stringSelectedAreas = Array.from(selectedAreas).join(",");
		urlSearchParams.set("currentPage", page.toString());
		urlSearchParams.set("selectedAreas", stringSelectedAreas);
		router.replace(`?${urlSearchParams.toString()}`);
	}, [selectedAreas, params, router, page]);
	return (
		<>
			<section className="pb-2 pt-10 md:pb-10">
				<div className=" mx-auto flex w-4/5 flex-col items-center md:flex-row">
					<div className="flex flex-col items-center justify-center py-1 text-center md:w-full md:flex-row lg:py-4">
						<div className="flex-1">
							<Image
								src="/assets/social-wellbeing.webp"
								alt="Areas-to-improve"
								width={500}
								height={800}
							/>
						</div>
					</div>
					<div className="flex flex-col flex-wrap content-center gap-3 text-left md:w-full md:text-left">
						<div className="mb-1 md:mb-3">
							<div className="items-left flex flex-col">
								<h1 className="mb-2 text-2xl font-bold text-white md:mb-8 lg:text-5xl">
									I am planning to work for improving
								</h1>
								<span className="mb-4 text-start text-lg font-light text-white md:mb-8 md:text-2xl">
									The light to change comes within your soul. Make your life meaningful
								</span>
								<div className="items-left mb-4 flex flex-col">
									<div className="flex flex-wrap gap-2">
										{improveAreas.map((improveArea, index) => (
											<Tag
												key={index}
												text={improveArea}
												setSelectedList={setSelectedAreas}
												selectedList={selectedAreas}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AreasToImprove;
