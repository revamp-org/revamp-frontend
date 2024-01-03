import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const HowItWorks = () => {
	return (
		<>
			<Navbar />
			<div className="h-screen-height flex flex-col items-center justify-center gap-2 ">
				<div className="mx-auto my-auto text-center">
					<h1 className="text-2xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
						HOW IT WORKS?
					</h1>
					<h1 className="text-2xl font-thin text-white sm:text-4xl md:text-4xl lg:text-5xl">
						This page is under construction.
					</h1>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default HowItWorks;
