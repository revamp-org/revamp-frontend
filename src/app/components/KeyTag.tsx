import { te } from "date-fns/locale";
import React, { useState } from "react";

const Tag = ({
	text,
	setSelectedList: setSelectedList,
	selectedList: selectedList,
}: {
	text: string;
	setSelectedList: React.Dispatch<React.SetStateAction<Set<string>>>;
	selectedList: Set<string>;
}) => {
	const selected = Array.from(selectedList).find((selectedArea) => selectedArea === text);
	const [isButtonClicked, setIsButtonClicked] = useState(selected !== undefined);

	const handleClick = () => {
		setIsButtonClicked(!isButtonClicked);
		if (!isButtonClicked) {
			setSelectedList((prev) => {
				const newSet = new Set([...prev, text]);
				return newSet;
			});
		} else {
			setSelectedList((prev) => {
				prev.delete(text);
				const newArray = Array.from(prev).filter((item) => item !== text);
				return new Set(newArray);
			});
		}
	};
	return (
		<button
			onClick={handleClick}
			className={`btn  md:text-md text-sm hover:bg-gray-400 lg:text-lg  ${
				isButtonClicked ? "bg-gray-400 text-black" : "bg-accent"
			}`}
		>
			{text}
		</button>
	);
};

export default Tag;
