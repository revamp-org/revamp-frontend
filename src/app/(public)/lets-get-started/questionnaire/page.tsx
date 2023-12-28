import React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
const Questionnaire = () => {
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
								<h1 className="mb-2 text-5xl font-bold text-white md:mb-8">
									How are you feeling lately ?
								</h1>
								<span className="text-start text-sm font-normal text-gray-400 md:mb-8 md:text-xl">
									Reflect upon yoour feelings
								</span>
								<div className="items-left mb-4 flex flex-col">
									<h2 className="mb-2 text-xl font-semibold text-gray-400">Positiveness</h2>
									<div className="flex flex-wrap ">
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											productive
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											energized
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											calm
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											motivated
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											healthy
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											sleeping well
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											sleeping well
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											eating properly
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											self aware
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											community engagement
										</div>
									</div>
								</div>
								<div className="items-left flex flex-col">
									<h2 className="mb-2 text-xl font-semibold text-gray-400">Negativeness</h2>
									<div className="flex flex-wrap space-x-2">
										<div className="mr-3 flex transform cursor-pointer flex-col  p-1 text-white">
											lazy
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col text-white">
											stressed
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col text-white">
											poor sleep
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col text-white">
											drained
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col text-white">
											emotionally unwell
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col text-white">
											angry
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col text-white">
											procastinating
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col text-white">
											poor work-life balance
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col text-white">
											socially inactive
										</div>
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
