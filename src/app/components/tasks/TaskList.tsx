"use client";
import { tasksData } from "@/lib/data";
import { Task } from "@/lib/types";
import { useState } from "react";
import CreateTaskDialog from "./CreateTask";
import ListItem from "../ListItem";

const TaskList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [createTask, setCreateTask] = useState<boolean>(false);
	return (
		<section className="space-y-2">
			<CreateTaskDialog />

			{tasksData.map((task: Task) => (
				<ListItem
					key={task.taskId}
					id={task.taskId}
					title={task.title}
					queryKey="taskid"
					href={
						isDashboardPage
							? `/dashboard/tasks?taskid=${task.taskId}`
							: `/tasks?taskid=${task.taskId}`
					}
				/>
			))}
		</section>
	);
};

export default TaskList;
