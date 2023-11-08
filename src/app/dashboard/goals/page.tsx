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

			{goalId ? (
				<GoalDetail />
			) : (
				<div className="broder-gray-100 grid h-full w-full place-items-center border ">
					Choose a Goal
				</div>
			)}
		</section>
	);
};

export default GoalPage;
