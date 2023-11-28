import GoalDetail from "@/app/components/goals/GoalDetail";
import GoalList from "@/app/components/goals/GoalList";

const GoalPage = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const goalId = searchParams?.goalid;
	return (
		<section className="grid h-[100dvh_-_4rem] w-full grid-cols-2 gap-2  p-2 text-primary-foreground">
			<GoalList isDashboardPage={false} />

			<GoalDetail />
		</section>
	);
};

export default GoalPage;
