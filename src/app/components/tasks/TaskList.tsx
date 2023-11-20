"use client";
import { useEffect, useState } from "react";
import CreateTaskDialog from "./CreateTask";
import TaskListItem from "./TaskListItem";
import { taskData, todoData } from "@/lib/data";
import { SortableContext } from "@dnd-kit/sortable";
import TaskDndContextProvider from "@/lib/providers/TaskDndContextProvider";

const TaskList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	const [tasks, setTasks] = useState<Task[]>(taskData);

	useEffect(() => {
		setTasks(taskData);
	}, []);

	return (
		<TaskDndContextProvider setTasks={setTasks}>
			<section className="space-y-2">
				<CreateTaskDialog />

				<SortableContext items={tasks.map((task: Task) => task.taskId)}>
					{tasks.map((task: Task) => (
						<TaskListItem
							key={task.taskId}
							task={task}
							href={
								isDashboardPage
									? `/dashboard/tasks?taskid=${task.taskId}`
									: `tasks?taskid=${task.taskId}`
							}
						/>
					))}
				</SortableContext>
			</section>
		</TaskDndContextProvider>
	);
};

export default TaskList;
