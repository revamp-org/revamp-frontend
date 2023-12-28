import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Introduction = () => {
	return (
		<>
			<section className="pt-10">
				<div className=" mx-auto flex w-4/5 flex-col items-center md:flex-row">
					<div className="flex flex-col items-center justify-center py-1 text-center md:w-full md:flex-row lg:py-4">
						<div className="flex-1">
							<Image
								src="/assets/introduction-person.webp"
								alt="Introdue Yourself"
								width={500}
								height={800}
							/>
						</div>
					</div>
					<div className="flex flex-col flex-wrap content-center gap-3 text-left md:w-full md:text-left">
						<div className="mb-1 md:mb-3">
							<div className="items-left flex flex-col">
								<h1 className="mb-2 text-5xl font-bold text-white md:mb-8">Hello me..</h1>
								<span className="text-start text-sm font-normal text-white md:mb-8 md:text-xl">
									Introduce yourself to the world of change. Help us know you so that we can guide
									you through your journey of self-enlightenment
								</span>
								<div className="items-left mb-4 flex flex-col">
									<h2 className="mb-2 text-lg font-semibold text-white">my age</h2>
									<div className="flex space-x-2">
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">{`<18`}</Button>
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">18-24</Button>
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">25-34</Button>
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">35-44</Button>
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">45-54</Button>
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">55+</Button>
									</div>
								</div>
								<div className="items-left flex flex-col">
									<h2 className="mb-2 text-lg font-semibold text-white">status</h2>
									<div className="flex space-x-2">
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">student</Button>
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">employee</Button>
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">employer</Button>
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">
											self-employed
										</Button>
										<Button className="rounded bg-gray-200 px-3 py-1 text-black">other</Button>
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

export default Introduction;
