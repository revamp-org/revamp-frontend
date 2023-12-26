import React, { useState } from "react";
import Image from "next/image";

const Slider = ({ images }: { images: string[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className="">
			<button onClick={prevSlide} className="slider-button prev-button">
				{"<<"}
			</button>
			<Image
				src={images[currentIndex]}
				alt={`Slide ${currentIndex + 1}`}
				className="slider-image"
			/>
			<button onClick={nextSlide} className="slider-button next-button">
				{">>"}
			</button>
		</div>
	);
};

export default Slider;
