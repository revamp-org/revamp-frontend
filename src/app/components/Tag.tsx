import { useState } from "react";

const Tag = ({ tagName }: { tagName: String }) => {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	return (
		<button
			className={`rounded-full ${
				isClicked ? "bg-black text-white" : "bg-gray-300"
			}  px-2 py-1 text-sm transition-all duration-300 ease-in-out hover:translate-y-[-0.5rem] hover:cursor-pointer hover:bg-black hover:text-white lg:px-4 lg:py-2`}
			onClick={() => setIsClicked(!isClicked)}
		>
			{tagName}
		</button>
	);
};

export default Tag;
