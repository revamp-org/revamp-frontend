import React from "react";
import Image from "next/image";
const MajorGoals = () => {
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
								<h1 className="mb-2 text-5xl font-bold text-white md:mb-8">
									What are your goals ?
								</h1>

								<div className="flex flex-wrap ">
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Stay Fit
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Healthy Diets
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Reducing Stress
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Better financial Planning
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Find work-life Balance
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Skill Development
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Participating in Social Cause
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Career Growth
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Positive Self-talks
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col items-center text-lg text-white">
										Quality Sleep
									</div>
								</div>
								<div className="flex flex-wrap ">
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col text-lg text-white">
										Mindfulness
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col text-lg text-white">
										Being Punctual
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col text-lg text-white">
										Know yourself
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col text-lg text-white">
										Culturing good habits
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col text-lg text-white">
										Emotional control
									</div>
									<div className="md:md-3 mb-2 mr-7 flex transform cursor-pointer flex-col text-lg text-white">
										Time Management
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

export default MajorGoals;
