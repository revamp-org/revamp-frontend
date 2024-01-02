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
import { useRouter, useSearchParams } from "next/navigation";

const letsGetStarted = () => {
	const totalPages = 6; // Total number of pages
	// use Params
	const params = useSearchParams();
	const [currentPage, setCurrentPage] = useState(1);

	const router = useRouter();

	const handlePage = (pageNumber: number) => {
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

			<div className=" relative ">
				<div
					className={`absolute left-1/2 top-1/2 h-0.5 w-[80%] -translate-x-1/2  transform items-center justify-center  bg-black `}
				/>

				<ul className=" mx-auto flex h-full max-w-[80%] items-center justify-between py-2 text-center">
					{[1, 2, 3, 4, 5, 6].map((step) => (
						<li
							className={`z-10 h-8 w-8 rounded-full bg-[#22394A] lg:h-12 lg:w-12 ${
								currentPage === step ? "bg-black" : "bg-[#22394A]"
							}`}
						>
							<button onClick={() => handlePage(step)} className="h-full w-full">
								<p className="text-sm font-semibold text-white md:text-xl lg:text-2xl">{step}</p>
							</button>
						</li>
					))}
				</ul>
			</div>
			<div className="lg:h-[70dvh]">
				{currentPage === 1 && <Landing />}
				{currentPage === 2 && <Introduction />}
				{currentPage === 3 && <AreasToImprove />}
				{currentPage === 4 && <Questionnaire />}
				{currentPage === 5 && <MajorGoals />}
				{currentPage === 6 && <FinalPage />}
			</div>
			<div className="mx-auto mb-4 mt-4 flex w-4/5 justify-end gap-2">
				<section className="  ">
					{currentPage > 1 && (
						<div className=" ">
							<button
								className=" btn bg-accent hover:bg-blue-300 hover:text-black"
								onClick={handleGoBack}
							>
								Go Back
							</button>
						</div>
					)}
				</section>
				<section className=" ">
					<div className="">
						<button
							onClick={() => handlePage(currentPage + 1)}
							className="btn bg-accent  hover:bg-blue-300 hover:text-black"
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
