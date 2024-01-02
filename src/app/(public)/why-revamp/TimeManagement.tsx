import React from "react";
import Image from "next/image";
const Time = () => {
	return (
		<>
			<div className=" h-screen-height mx-auto flex w-4/5 flex-col items-center justify-center md:flex-row ">
				<div className="mr-8 p-6 md:w-3/5">
					<h1 className="text-4xl font-bold text-white md:mb-10 md:text-7xl">Time Management</h1>
					<div className="md:mb-10">
						<p className="text-lg font-normal text-white md:text-2xl">
							Where have you been wasting your time? How do you really want to spend your time?
						</p>
					</div>
					<div>
						<p className="text-sm font-light  text-white md:text-xl">
							Organize your responsibilities and commitments easily. Create and follow timely goals
							that keeps you motivated to become a better version of youtself. Omit procastination
							once and for all
						</p>
					</div>
				</div>
				<div className="p-6 md:flex-1 ">
					<Image
						height={800}
						width={500}
						src="/assets/time_mgmt.webp"
						alt="time-management"
						className="h-500 md:h-800 w-full object-cover"
					/>
				</div>
			</div>
		</>
	);
};

export default Time;
