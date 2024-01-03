"use client";
import JournalCard from "@/app/components/JournalCard";
import { Goal, Journal } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { GetJournalsOfUser } from "@/graphql/queries.graphql";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const JournalDaily = () => {
	const { user } = useUser();
	const [loading, setLoading] = useState(true);
	const [dailyJournal, setDailyJournal] = useState<Journal[]>([]);
	const {
		error: _error,
		data,
		loading: fetchLoading,
	} = useQuery(GetJournalsOfUser, {
		variables: { userId: user?.id },
	});

	// initial data fetch
	useEffect(() => {
		if (data) {
			const fetchedJournals: Journal[] = data.getJournalsOfUser;
			setDailyJournal(fetchedJournals);
			setLoading(false);
		}
	}, [data]);

	return (
		<div className="w-full">
			<p className="p-2 text-xl font-semibold">Daily Journal</p>
			<div className="space-y-2 px-2">
				{dailyJournal.map((journal) => {
					return <JournalCard key={journal.journalId} id={journal.journalId} journal={journal} />;
				})}
			</div>
		</div>
	);
};

export default JournalDaily;
