import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoalState {
	goals: Goal[];
}

const initialState: GoalState = {
	goals: [],
};

export const goalSlice = createSlice({
	name: "goal",
	initialState,
	reducers: {
		setGoals: (state, action: PayloadAction<Goal[]>) => {
			state.goals = action.payload;
		},
	},
});

export const { setGoals } = goalSlice.actions;
export default goalSlice.reducer;
