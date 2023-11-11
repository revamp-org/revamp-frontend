"use client";
import { useState } from "react";
import CreateTaskDialog from "./CreateTask";
import TaskListItem from "./TaskListItem";
import { taskData } from "@/lib/data";

const TaskList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [createTask, setCreateTask] = useState<boolean>(false);
	return (
		<section className="space-y-2">
			<CreateTaskDialog />

			{taskData.map((task: Task) => (
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
