import React from "react";
import Image from "next/image";

const FinalPage = () => {
	return (
		<>
			<section className="pt-10">
				<div className=" mx-auto flex w-4/5 flex-col items-center md:flex-row">
					<div className="flex w-full flex-col items-center justify-center py-1 text-center md:flex-row lg:py-4">
						<div className="flex-1">
							<Image
								src="/assets/physical-wellbeing.webp"
								alt="Physical-wellbeing"
								width={500}
								height={800}
							/>
						</div>
						<div className="flex flex-col flex-wrap content-center gap-3 text-left md:w-1/2 md:text-left">
							<div className="mb-1 md:mb-3">
								<span className=" mb-2 text-2xl text-white sm:text-2xl md:text-5xl lg:text-6xl ">
									March forward
									<span className="ml-2 font-semibold text-white">And Rise</span>
								</span>
							</div>
							<div className="text-start text-xl font-light  text-white md:text-2xl">
								<p>Remember, it&apos;s not about one day, it&apos;s about DAY 01.</p>
							</div>
							<div className="text-md text-start font-normal text-white md:text-xl">
								<p>Sail your ship to the destiny of success.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FinalPage;
