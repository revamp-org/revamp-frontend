import { tasksData } from "@/lib/data";
import { Task } from "@/lib/types";
import React from "react";

const Tasks = () => {
	const tasks = tasksData;

	return (
		<section className="grid h-[100dvh_-_4rem] w-full grid-cols-2 gap-2   p-2 text-primary-foreground">
			<div>
				<h1>Tasks list</h1>

				{tasks.map((task: Task) => {
					return (
						<div key={task.taskId}>
							<h3>{task.title}</h3>
							<p>{task.description}</p>
						</div>
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
