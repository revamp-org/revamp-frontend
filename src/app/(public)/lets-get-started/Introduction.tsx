"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const ages: string[] = ["<18", "18-24", "25-34", "35-44", "45-54", "55+"];
const statuses: string[] = ["student", "employee", "employer", "self-employeed", "other"];

const Introduction = ({ page }: { page: number }) => {
	const params = useSearchParams();
	const [selectedAge, setSelectedAge] = useState<string | null>(params.get("selectedAge"));
	const [selectedStatus, setSelectedStatus] = useState<string | null>(params.get("selectedStatus"));
	const router = useRouter();

	const handleSelectedAge = (inputValue: string) => {
		if (selectedAge === inputValue) {
			setSelectedAge(null);
		} else {
			setSelectedAge(inputValue);
		}
	};

	const handleSelectedStatus = (inputValue: string) => {
		if (selectedStatus === inputValue) {
			setSelectedStatus(null);
		} else {
			setSelectedStatus(inputValue);
		}
	};

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(params);
		urlSearchParams.set("currentPage", page.toString());
		urlSearchParams.set("selectedAge", selectedAge || "");
		urlSearchParams.set("selectedStatus", selectedStatus || "");
		router.replace(`?${urlSearchParams.toString()}`);
	}, [selectedAge, selectedStatus, router, params, page]);
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
								<h1 className="mb-2 text-2xl font-bold text-white md:mb-8 lg:text-5xl">
									Hello me..
								</h1>
								<span className="mb-4 text-start text-lg font-light text-white md:mb-8 md:text-2xl">
									Introduce yourself to the world of change. Help us know you so that we can guide
									you through your journey of self-enlightenment
								</span>
								<div className="items-left mb-4 mt-4 flex flex-col">
									<h2 className="mb-2 text-lg font-semibold text-white">my age</h2>
									<div className="radio flex flex-wrap gap-2">
										{ages.map((age) => (
											<button
												key={age}
												className={`btn  md:text-md text-sm hover:bg-gray-400 lg:text-lg ${
													selectedAge === age ? "bg-gray-400 text-black" : "bg-accent"
												}`}
												onClick={() => handleSelectedAge(age)}
											>
												{age}
											</button>
										))}
									</div>
								</div>
								<div className="items-left flex flex-col">
									<h2 className="mb-2 text-lg font-semibold text-white">status</h2>
									<div className="flex flex-wrap gap-2">
										{statuses.map((status) => (
											<button
												key={status}
												className={`btn  md:text-md text-sm hover:bg-gray-400 lg:text-lg ${
													selectedStatus === status ? "bg-gray-400 text-black" : "bg-accent"
												}`}
												onClick={() => handleSelectedStatus(status)}
											>
												{status}
											</button>
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

export default Introduction;
