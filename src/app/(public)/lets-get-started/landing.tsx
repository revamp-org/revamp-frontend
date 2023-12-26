import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
	return (
		<>
			<section className="pt-10">
				<div className="h-screen-height mx-auto flex w-4/5 flex-col items-center md:flex-row">
					<div className="space-between flex w-full flex-row items-center justify-center gap-32 py-3 text-center lg:py-4">
						<div>
							<Image
								src="/assets/girl-meditating.webp"
								alt="Landing Image"
								width={500}
								height={800}
							/>
						</div>
						<div>
							<span className="flex gap-2">
								<h2 className="font-semi-bold white text-xl  text-white md:text-5xl">
									Take Charge for
								</h2>
								<h2 className="text-xl font-bold text-white md:mb-10 md:text-5xl">
									Positive Change
								</h2>
							</span>
							<div className="text-start text-lg font-normal  text-white md:mb-5 md:text-xl">
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
