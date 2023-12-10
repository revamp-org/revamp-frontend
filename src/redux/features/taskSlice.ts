import { Task } from "@/generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
	tasks: Task[];
	taskChange: boolean;
	isCheckboxChecked: boolean;
}

const initialState: TaskState = {
	tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
	taskChange: false,
	isCheckboxChecked: false,
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
	},
});

export const { toggleCheckbox, setTasks, setTaskChange } = taskSlice.actions;
export default taskSlice.reducer;
