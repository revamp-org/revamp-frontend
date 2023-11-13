"use client";
import { todoData } from "@/lib/data";
import CreateTodoDialog from "./CreateTodoDialog";
import TodoListItem from "./TodoListItem";

const TodoList = ({ isDashboardPage }: { isDashboardPage: boolean }) => {
	return (
		<section className="space-y-2">
			<CreateTodoDialog />
			{todoData.map((todo: Todo) => (
				<TodoListItem
					key={todo.todoId}
					todo={todo}
					href={
						isDashboardPage
							? `/dashboard/tasks?todoid=${todo.todoId}`
							: `/tasks?todoid=${todo.todoId}`
					}
				/>
			))}
		</section>
	);
};

export default TodoList;
