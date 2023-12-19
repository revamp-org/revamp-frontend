import CommunityJournals from "@/app/components/community/CommunityJournals";
import JournalTrendingSidebar from "@/app/components/community/JournalTrendingSidebar";

const Community = () => {
	return (
		<div className=" mx-auto flex max-w-[--screen-max]  ">
			<CommunityJournals />
			<JournalTrendingSidebar />
		</div>
	);
};

export default Community;
