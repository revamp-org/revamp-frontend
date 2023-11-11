import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoalState {
	activeGoal: Goal[];
	inActiveGoal: Goal[];
}

const initialState: GoalState = {
	activeGoal: [],
	inActiveGoal: [],
};

export const goalSlice = createSlice({
	name: "goal",
	initialState,
	reducers: {
		setActiveGoal: (state, action: PayloadAction<Goal[]>) => {
			state.activeGoal = action.payload;
		},
		setInActiveGoal: (state, action: PayloadAction<Goal[]>) => {
			state.inActiveGoal = action.payload;
		},
	},
});

export const { setActiveGoal, setInActiveGoal } = goalSlice.actions;
export default goalSlice.reducer;
