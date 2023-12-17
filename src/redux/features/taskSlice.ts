import { Task } from "@/generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
	tasks: Task[];
	taskChange: boolean;
	isCheckboxChecked: boolean;
	tasksDetails: Task[];
}

const initialState: TaskState = {
	tasks: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("tasks") || "[]") : [],
	taskChange: false,
	isCheckboxChecked: false,
	tasksDetails:
		typeof window !== "undefined" ? JSON.parse(localStorage.getItem("taskDetails") || "[]") : [],
};

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		setTaskChange: (state) => {
			state.taskChange = !state.taskChange;
		},
		setTasks: (state, action: PayloadAction<Task[]>) => {
			state.tasks = action.payload;
			if (typeof window !== "undefined")
				localStorage.setItem("tasks", JSON.stringify(action.payload));
		},

		deleteTask: (state, action: PayloadAction<Task["taskId"]>) => {
			state.tasks = state.tasks.filter((singleTask) => singleTask?.taskId !== action.payload);
			if (typeof window !== "undefined") localStorage.setItem("tasks", JSON.stringify(state.tasks));

			state.tasksDetails = state.tasksDetails.filter(
				(singleTask) => singleTask?.taskId !== action.payload,
			);
			if (typeof window !== "undefined")
				localStorage.setItem("taskDetails", JSON.stringify(state.tasksDetails));
		},

		addTaskDetail: (state, action: PayloadAction<Task>) => {
			// check if task already exists
			const taskExists = state.tasksDetails.find(
				(singleTask) => singleTask?.taskId === action.payload?.taskId,
			);

			if (taskExists) {
				state.tasksDetails = state.tasksDetails.map((singleTask) =>
					singleTask?.taskId === action.payload?.taskId ? action.payload : singleTask,
				);
			} else {
				state.tasksDetails = [...state.tasksDetails, action.payload];
			}

			if (typeof window !== "undefined")
				localStorage.setItem("taskDetails", JSON.stringify(state.tasksDetails));
		},
	},
});

export const { setTasks, setTaskChange, addTaskDetail, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
