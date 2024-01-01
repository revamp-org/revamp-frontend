import React, { useState } from "react";

const Tag = ({ text }: { text: string }) => {
	const [isButtonClicked, setIsButtonClicked] = useState(false);

	return (
		<button
			onClick={() => setIsButtonClicked(!isButtonClicked)}
			className={`btn  md:text-md text-sm hover:bg-gray-400 lg:text-lg  ${
				isButtonClicked ? "bg-gray-400 text-black" : "bg-accent"
			}`}
		>
			{text}
		</button>
	);
};

export default Tag;
