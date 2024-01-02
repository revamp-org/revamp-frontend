"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Tag from "@/app/components/KeyTag";
import { useSearchParams, useRouter } from "next/navigation";

const postiveFeeligs: string[] = [
	"productive",
	"energized",
	"calm",
	"motivated",
	"healthy",
	"sleeping well",
	"eating properly",
	"self aware",
	"community engagement",
];
const negativeFeelings: string[] = [
	"lazy",
	"stressed",
	"poor sleep",
	"drained",
	"emotionally unwell",
	"angry",
	"procastinating",
	"poor work-life balance",
	"socaially inactive",
];
const Questionnaire = () => {
	const params = useSearchParams();
	const [positveFeeling, setPositiveFeelings] = useState<Set<string>>(
		new Set(params.get("positiveFeeling")?.split(",")),
	);
	const [negativeFeeling, setNegativeFeelings] = useState<Set<string>>(
		new Set(params.get("negativeFeeling")?.split(",")),
	);

	const router = useRouter();
	useEffect(() => {
		const urlSearchParams = new URLSearchParams(params);
		const stringSelectedPosiveFeelings = Array.from(positveFeeling).join(",");
		const stringSelectedNegativeFeelings = Array.from(negativeFeeling).join(",");
		urlSearchParams.set("positiveFeeling", stringSelectedPosiveFeelings);
		urlSearchParams.set("negativeFeeling", stringSelectedNegativeFeelings);
		router.replace(`?${urlSearchParams.toString()}`);
	}, [positveFeeling, negativeFeeling, router, params]);
	return (
		<>
			<section className="pb-2 pt-10 md:pb-10">
				<div className=" mx-auto flex w-4/5 flex-col items-center md:flex-row">
					<div className="flex flex-col items-center justify-center py-1 text-center md:w-full md:flex-row lg:py-4">
						<div className="flex-1">
							<Image
								src="/assets/questionnaire-set.webp"
								alt="Questionnaire Set"
								width={500}
								height={800}
							/>
						</div>
					</div>
					<div className="flex flex-col flex-wrap content-center gap-3 text-left md:w-full md:text-left">
						<div className="mb-1 md:mb-3">
							<div className="items-left flex flex-col">
								<h1 className="mb-2 mt-4 text-2xl font-bold text-white md:mb-8 md:text-5xl">
									How are you feeling lately
								</h1>
								<span className="mb-4 text-start text-lg font-light text-white md:mb-8 md:text-2xl">
									Reflect upon your feelings
								</span>
								<div className="items-left mb-4 flex flex-col">
									<h2 className="mb-2 text-lg font-semibold text-white">Positiveness</h2>
									<div className="flex flex-wrap gap-2">
										{postiveFeeligs.map((feeling, index) => (
											<Tag
												text={feeling}
												key={index}
												setSelectedList={setPositiveFeelings}
												selectedList={positveFeeling}
											/>
										))}
									</div>
								</div>
								<div className="items-left flex flex-col">
									<h2 className="mb-2 text-lg font-semibold text-white">Negativeness</h2>
									<div className="flex flex-wrap gap-2">
										{negativeFeelings.map((feeling) => (
											<Tag
												key={feeling}
												text={feeling}
												setSelectedList={setNegativeFeelings}
												selectedList={negativeFeeling}
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

export default Questionnaire;
