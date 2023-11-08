import GoalDetail from "@/app/components/goals/GoalDetail";
import GoalList from "@/app/components/goals/GoalList";

const HomePage = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const goalId = searchParams?.goalid;
	return (
		<>
			<GoalList />

			{goalId && <GoalDetail />}
		</>
	);
};

export default HomePage;
