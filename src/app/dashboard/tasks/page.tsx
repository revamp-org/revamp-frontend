import TaskListItem from "@/app/components/tasks/TaskListItem";
import { taskData } from "@/lib/data";
import React from "react";

const Tasks = () => {
	const tasks = taskData;

	const isDashboardPage = true;

	return (
		<section className="grid h-[100dvh_-_4rem] w-full grid-cols-2 gap-2   p-2 text-primary-foreground">
			<div className="space-y-2">
				<h1>Tasks list</h1>

				{tasks.map((task: Task) => {
					return (
						<TaskListItem
							key={task.taskId}
							id={task.taskId}
							title={task.title}
							href={isDashboardPage ? `dashboard/task?id=${task.taskId}` : `task?id=${task.taskId}`}
						/>
					);
				})}
			</div>

			<section className="boreder-gray-100 border">
				<h1>Todos List</h1>
			</section>
		</section>
	);
};

export default Tasks;
