export type Goal = {
	goalId: number;
	title: string;
	description: string;
	date: string;
	priority: string;
};

export type Task = {
	taskId: number;
	title: string;
	description: string;
	priority: string;
	deadline: string;
	isActive: boolean;
	createdAt: string;
	goalId: number;
};

export type Todo = {
	todoId: number;
	title: string;
	priority: string;
	createdAt: string;
	taskId: number;
};
