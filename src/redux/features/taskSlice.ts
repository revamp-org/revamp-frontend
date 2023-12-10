import { Task } from "@/generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
	tasks: Task[];
	taskChange: boolean;
	isCheckboxChecked: boolean;
	tasksDetails: Task[];
}

const initialState: TaskState = {
	tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
	taskChange: false,
	isCheckboxChecked: false,
	tasksDetails: JSON.parse(localStorage.getItem("tasksDetails") || "[]"),
};

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		setTasks: (state, action: PayloadAction<Task[]>) => {
			state.tasks = action.payload;
			localStorage.setItem("tasks", JSON.stringify(action.payload));
		},
		setTaskChange: (state) => {
			state.taskChange = !state.taskChange;
		},
		toggleCheckbox: (state) => {
			state.isCheckboxChecked = !state.isCheckboxChecked;
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

			localStorage.setItem("tasksDetails", JSON.stringify(state.tasksDetails));
		},
		deleteTask: (state, action: PayloadAction<Task["taskId"]>) => {
			state.tasks = state.tasks.filter((singleTask) => singleTask?.taskId !== action.payload);
			localStorage.setItem("tasks", JSON.stringify(state.tasks));

			state.tasksDetails = state.tasksDetails.filter(
				(singleTask) => singleTask?.taskId !== action.payload,
			);
			localStorage.setItem("tasksDetails", JSON.stringify(state.tasksDetails));
		},
	},
});

export const { toggleCheckbox, setTasks, setTaskChange } = taskSlice.actions;
export default taskSlice.reducer;
