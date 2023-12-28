import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
	return (
		<>
			<section className="pt-10">
				<div className=" mx-auto flex w-4/5 flex-col items-center md:flex-row">
					<div className="flex w-full flex-col items-center justify-center py-1 text-center md:flex-row lg:py-4">
						<div className="flex-1">
							<Image
								src="/assets/girl-meditating.webp"
								alt="Landing Image"
								width={500}
								height={800}
							/>
						</div>
						<div className="flex flex-col flex-wrap content-center gap-3 text-left md:w-1/2 md:text-left">
							<div className="mb-1 md:mb-3">
								<span className=" mb-2 text-4xl text-white sm:text-2xl md:text-5xl lg:text-6xl ">
									Take Charge for
									<span className="ml-2 font-semibold text-white">Positive Change</span>
								</span>
							</div>
							<div className="text-start text-xl font-normal  text-white md:text-2xl">
								<p>Begin your journey to transcend and become the designer of your life.</p>
							</div>
							<div className="text-start text-sm font-semibold text-white md:text-xl">
								<p>Be the master of you own fate.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Landing;
