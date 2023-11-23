declare module "*.graphql";

type Goal = {
	goalId: number;
	title: string;
	description?: string;
	priority: string;
	relatedArea?: string;
	streak: number;
	isActive: boolean;
	deadline?: string | null;
	createdAt: string;
	updatedAt: string;
	order: number;
	userId: string;
};

type Task = {
	taskId: number;
	title: string;
	description?: string;
	priority?: string;
	deadline?: string | null;
	createdAt: string;
	streak: number;
	order: number;
	goalId: number;
};

type Milestone = {
	milestoneId: number;
	milestone: string;
	taskId: number;
};

type Todo = {
	todoId: number;
	todo: string;
	isDone: boolean;
	createdAt: string;
	order: number;
	taskId: number;
};
