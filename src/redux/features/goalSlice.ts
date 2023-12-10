import { Goal } from "@/generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoalState {
	goals: Goal[];
	goalChange: boolean;
}

const initialState: GoalState = {
	goals: JSON.parse(localStorage.getItem("goals") || "[]"),
	goalChange: false,
};

export const goalSlice = createSlice({
	name: "goal",
	initialState,
	reducers: {
		setGoalChange: (state) => {
			state.goalChange = !state.goalChange;
		},
		setGoals: (state, action: PayloadAction<Goal[]>) => {
			state.goals = action.payload;
			localStorage.setItem("goals", JSON.stringify(action.payload));
		},
	},
});

export const { setGoals, setGoalChange } = goalSlice.actions;
export default goalSlice.reducer;
