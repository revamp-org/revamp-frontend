import GoalDetail from "@/app/components/goals/GoalDetail";
import GoalList from "@/app/components/goals/GoalList";
import TaskList from "../components/tasks/TaskList";
import TodoList from "../components/todos/TodoList";

const HomePage = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const goalId = searchParams?.goalid;
	return (
		<div className="grid w-full grid-cols-3 gap-4  p-4">
			{/* Goal section */}
			<section>
				<GoalList isDashboardPage={true} />
			</section>

			{/* Task section */}

			<section>
				<TaskList isDashboardPage={true} />
			</section>

			<section>
				<TodoList isDashboardPage={true} />
			</section>
		</div>
	);
};

export default HomePage;
