import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import AvatarLogo from "../AvatarLogo";

const DiscussionCard = ({
	title,
	noOfParticipants,
	path,
}: {
	title: string;
	noOfParticipants: number;
	path?: string;
}) => {
	return (
		<div className="mb-4 rounded-xl bg-accent p-4">
			<div className="mb-2 flex items-center gap-2">
				<AvatarLogo />
				<h3 className="font-semibold tracking-tight">{title}</h3>
			</div>
			<p className="text-gray-500">{`${noOfParticipants} participants`}</p>
			<Link className="text-blue-500 hover:underline" href={path || ""}>
				View Discussion
			</Link>
		</div>
	);
};
const TrendingCard = ({
	title,
	badgeName,
	noOfParticipants,
}: {
	title: string;
	badgeName: string;
	noOfParticipants: number;
}) => {
	return (
		<Card className="mb-4 border-none bg-accent">
			<CardContent className="p-4">
				<div className="flex items-center justify-between">
					<h3 className="font-semibold tracking-tight">{title}</h3>
					<Badge>{badgeName}</Badge>
				</div>
				<p className="text-gray-500 dark:text-gray-400">{`Join ${noOfParticipants} others who are using this goal.`}</p>
			</CardContent>
		</Card>
	);
};

export default function JournalTrendingSidebar() {
	return (
		<main className="  h-[calc(100dvh-4rem)] ">
			<aside className="h-full w-96  p-2">
				<section className="mb-2">
					<h2 className="mb-4 text-lg font-bold">Trending Goals</h2>

					<TrendingCard title="Learn a New Language" badgeName="Hot" noOfParticipants={200} />
					<TrendingCard
						title="Start a Daily Meditation Practice"
						badgeName="Trending"
						noOfParticipants={150}
					/>
					<TrendingCard title="Run a Marathon" badgeName="New" noOfParticipants={75} />
				</section>
				<section>
					<h2 className="mb-4 rounded-xl  p-1 text-xl font-bold">Active Discussions</h2>
					<DiscussionCard title="Overcoming Procrastination" noOfParticipants={120} path="#" />
					<DiscussionCard title="Maintaining a Healthy Diet" noOfParticipants={85} path="#" />
					<DiscussionCard title="Learning to Code" noOfParticipants={45} path="#" />
				</section>
			</aside>
		</main>
	);
}
