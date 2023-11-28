import TaskDetail from "@/app/components/tasks/TaskDetail";
import TaskList from "@/app/components/tasks/TaskList";

const Tasks = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const taskId = searchParams?.taskid;
	return (
		<section className="grid h-[100dvh_-_4rem] w-full grid-cols-2 gap-2   p-2 text-primary-foreground">
			<div className="space-y-2">
				<TaskList isDashboardPage={false} />
			</div>

			{taskId ? (
				<TaskDetail />
			) : (
				<div className="broder-gray-100 grid h-full w-full place-items-center border ">
					Choose a Task
				</div>
			)}
		</section>
	);
};

export default Tasks;
