"use client";
import { tasksData } from "@/lib/data";
import { Task } from "@/lib/types";
import { useState } from "react";
import CreateTaskDialog from "./CreateTask";
import TaskListItem from "./TaskListItem";

const TaskList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [createTask, setCreateTask] = useState<boolean>(false);
	return (
		<section className="space-y-2">
			<CreateTaskDialog />

			{tasksData.map((task: Task) => (
				<TaskListItem
					key={task.taskId}
					id={task.taskId}
					title={task.title}
					href={
						isDashboardPage ? `/dashboard/tasks?id=${task.taskId}` : `/tasks?taskid=${task.taskId}`
					}
				/>
			))}
		</section>
	);
};

export default TaskList;
