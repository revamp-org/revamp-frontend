"use client";
import React, { useState } from "react";
import Landing from "./landing/page";
import Link from "next/link";
import Image from "next/image";
import Introduction from "./introduction/page";
import Questionnaire from "./questionnaire/page";
import MajorGoals from "./majorGoals/page";
import AreasToImprove from "./areasToImprove/page";
import FinalPage from "./finalPage/page";

const letsGetStarted = () => {
	const totalPages = 6; // Total number of pages
	const [currentPage, setCurrentPage] = useState(1);

	const handlePage = (pageNumber) => {
		setCurrentPage((prevPage) => {
			// Implement circular navigation
			if (pageNumber > totalPages) {
				return 1;
			} else if (pageNumber < 1) {
				return totalPages;
			} else {
				return pageNumber;
			}
		});
	};

	const handleGoBack = () => {
		setCurrentPage((prevPage) => {
			// Implement circular navigation for going back
			if (prevPage === 1) {
				return totalPages;
			} else {
				return prevPage - 1;
			}
		});
	};
	return (
		<div className="h-screen overflow-auto bg-primary">
			<div className=" flex items-center justify-center py-3 text-center  lg:py-4">
				<Link href="/">
					<Image src="/assets/logo3-dark.svg" width={120} height={60} alt="Revamp Logo" />
				</Link>
			</div>

			<div className=" relative py-3 pb-8 lg:py-4">
				<div className="absolute top-1/2 h-0.5 w-full  bg-black" />
				<ul role="tablist" className=" mx-auto flex w-4/5 items-center justify-between text-center">
					{[1, 2, 3, 4, 5, 6].map((step) => (
						<li
							key={step}
							className={`rounded-full bg-[#22394A] px-3 py-2 
							${currentPage === step ? "bg-black" : "bg-[#22394A]"} ${currentPage === step ? "active" : ""}`}
						>
							<button onClick={() => handlePage(step)}>
								<div role="tab" id={`step-${step}`} aria-controls={step} className="relative">
									<p className="text-2xl font-semibold text-white">{step}</p>
								</div>
							</button>
						</li>
					))}
				</ul>
			</div>
			{currentPage === 1 && <Landing />}
			{currentPage === 2 && <Introduction />}
			{currentPage === 3 && <AreasToImprove />}
			{currentPage === 4 && <Questionnaire />}
			{currentPage === 5 && <MajorGoals />}
			{currentPage === 6 && <FinalPage />}

			<div className="mx-auto flex w-4/5 ">
				<section className=" w-full flex-1 justify-start pl-8">
					{currentPage > 1 && (
						<div className="left-5 mr-auto ">
							<button
								className="absolute rounded-md bg-[#22394A] px-2 py-1 text-lg tracking-wide text-white hover:bg-blue-300 hover:text-black"
								onClick={handleGoBack}
							>
								Go Back
							</button>
						</div>
					)}
				</section>
				<section className="w-1/2 flex-1 justify-end ">
					<div className="">
						<button
							onClick={() => handlePage(currentPage + 1)}
							className="absolute rounded-md bg-[#22394A] px-2 py-1 text-lg tracking-wide text-white hover:bg-blue-300 hover:text-black"
						>
							{currentPage >= 1 && currentPage < 6 ? "Continue" : "Get Started"}
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default letsGetStarted;
