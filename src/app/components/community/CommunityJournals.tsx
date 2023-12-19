import React from "react";
import JournalPostCard from "./JournalPostCard";

const CommunityJournals = () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<section className="w-full space-y-2 p-2 ">
			{array.map((_item, index) => {
				return <JournalPostCard key={index} />;
			})}
		</section>
	);
};

export default CommunityJournals;
