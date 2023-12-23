import JournalCard from "@/app/components/JournalCard";
import { Journal } from "@/generated/graphql";
import { journalData } from "@/lib/data";

const JournalDaily = () => {
	const dailyJournal: Journal[] = journalData.filter((journal) => journal.type === "weekly");

	return (
		<div className="w-full">
			<p className="p-2 text-xl font-semibold">Weekly Journal</p>
			<div className="space-y-2 px-2">
				{dailyJournal.map((journal) => {
					return <JournalCard key={journal.journalId} id={journal.journalId} journal={journal} />;
				})}
			</div>
		</div>
	);
};

export default JournalDaily;
