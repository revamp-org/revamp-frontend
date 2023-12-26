import React from "react";
import Landing from "./landing";
import Link from "next/link";
import Image from "next/image";

const letsGetStarted = () => {
	return (
		<div className="bg-primary">
			<div className=" flex items-center justify-center py-3 text-center  lg:py-4">
				<Link href="/">
					<Image src="/assets/logo3-dark.svg" width={120} height={60} alt="Revamp Logo" />
				</Link>
			</div>
			<div className="py-3 pb-8 lg:py-4 ">
				<ul
					role="tablist"
					className="mx-auto flex w-4/5 items-center justify-between  space-y-4   text-center"
				>
					<li className="rounded-full bg-[#22394A] px-3 py-2" step-size="xs">
						<a href="javascript:void(0)">
							<div role="tab" id="step-0" aria-controls="0" className="">
								<div className="">
									<p className="text-2xl font-semibold text-white">1</p>
								</div>
							</div>
						</a>
					</li>
					<li className="bg-rounded-full rounded-full bg-[#22394A] px-3 py-2" step-size="xs">
						<a href="javascript:void(0)">
							<div role="tab" id="step-1" aria-controls="1" className="">
								<p className="text-2xl font-semibold text-white">2</p>
							</div>
						</a>
					</li>
					<li className="rounded-full bg-[#22394A] px-3 py-2" step-size="xs">
						<a href="javascript:void(0)">
							<div role="tab" id="step-2" aria-controls="2" className="  md checked">
								<p className="text-2xl font-semibold text-white">3</p>
							</div>
						</a>
					</li>
					<li className="rounded-full bg-[#22394A] px-3 py-2" step-size="xs">
						<a href="javascript:void(0)">
							<div role="tab" id="step-3" aria-controls="3" className=" md checked">
								<p className="text-2xl font-semibold text-white">4</p>
							</div>
						</a>
					</li>
					<li className="rounded-full bg-[#22394A] px-3 py-2" step-size="xs">
						<a href="javascript:void(0)">
							<div role="tab" id="step-4" aria-controls="4" className=" md checked">
								<p className="text-2xl font-semibold text-white">5</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<Landing />

			<section className="flex w-4/5 justify-end pr-8 pt-10">
				<div className="right-5 ml-auto ">
					<button className="absolute rounded-md bg-[#22394A] px-2 py-1 text-lg tracking-wide text-white hover:bg-blue-300 hover:text-black">
						Continue
					</button>
				</div>
			</section>
		</div>
	);
};

export default letsGetStarted;
