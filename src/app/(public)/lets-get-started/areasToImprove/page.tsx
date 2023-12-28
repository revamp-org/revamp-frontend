import React from "react";
import Image from "next/image";
const AreasToImprove = () => {
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
								<h1 className="mb-2 text-5xl font-bold text-white md:mb-8">
									I am planning to work for improving
								</h1>
								<span className="text-start text-sm font-normal text-gray-400 md:mb-8 md:text-xl">
									The light to change comes within your soul. Make your life meaningful
								</span>
								<div className="items-left text-l mb-4 flex flex-col gap-2">
									<div className="flex flex-wrap ">
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											Physical Health
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											Mental Wellbeing
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											Emotional Wellbeing
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											Financial Planning
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											Environmental Awareness
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											Social Participation
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											Safety
										</div>
										<div className="mr-3 flex transform cursor-pointer flex-col items-center text-white">
											Career Satisfaction
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

export default AreasToImprove;
