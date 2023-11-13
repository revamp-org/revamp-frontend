import TaskList from "@/app/components/tasks/TaskList";

const Tasks = () => {
	return (
		<section className="grid h-[100dvh_-_4rem] w-full grid-cols-2 gap-2   p-2 text-primary-foreground">
			<div className="space-y-2">
				<h1>Tasks list</h1>

				<TaskList isDashboardPage={false} />
			</div>

			<section className="boreder-gray-100 border">
				<h1>Todos List</h1>
			</section>
		</section>
	);
};

export default Tasks;
