import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
	isCheckboxChecked: boolean;
}

const initialState: TaskState = {
	isCheckboxChecked: false,
};

export const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		toggleCheckbox: (state) => {
			state.isCheckboxChecked = !state.isCheckboxChecked;
		},
	},
});

export const { toggleCheckbox } = taskSlice.actions;
export default taskSlice.reducer;
