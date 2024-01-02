import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const Landing = () => {
	return (
		<>
			<Navbar />
			<div className="h-screen-height  ">
				<section className="mx-auto mt-24  max-w-screen-2xl items-center px-4 pb-6 md:px-8 lg:flex">
					<div className="flex-1 space-y-4 sm:text-center lg:text-left">
						<h1 className="pt-10 text-6xl font-bold text-white xl:text-9xl ">REVAMP</h1>
						<h1 className=" text-3xl font-semibold text-white ">
							<span className="text-red-400">
								Transcending Physical, Mental and Emotional Health
							</span>
						</h1>
						<div className="items-center justify-center space-y-3 pt-20 sm:flex sm:space-x-4 sm:space-y-0 lg:justify-start">
							<div className=" block rounded-md bg-indigo-600 px-6 py-5 text-center text-white shadow hover:bg-red-700 lg:inline ">
								<Link href="/lets-get-started">Get Started</Link>
							</div>
							<div className="block rounded-md bg-indigo-600 px-6 py-5 text-center text-white shadow hover:bg-red-700 lg:inline">
								<Link href="/sign-up">How it Works</Link>
							</div>
						</div>
					</div>
					<div className="mt-7 flex-1 text-center lg:ml-3 lg:mt-0">
						<Image
							height={720}
							width={720}
							alt="Image"
							src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
							className="mx-auto w-full sm:w-10/12  lg:w-full"
						/>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default Landing;
