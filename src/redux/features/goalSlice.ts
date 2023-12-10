import { Goal } from "@/generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoalState {
	goals: Goal[];
	goalChange: boolean;
	goalsDetails: Goal[];
}

const initialState: GoalState = {
	goals: JSON.parse(localStorage.getItem("goals") || "[]"),
	goalChange: false,
	goalsDetails: JSON.parse(localStorage.getItem("goalsDetails") || "[]"),
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
		addGoalDetail: (state, action: PayloadAction<Goal>) => {
			// check if goal already exists
			const goalExists = state.goalsDetails.find(
				(singleGoal) => singleGoal?.goalId === action.payload?.goalId,
			);

			if (goalExists) {
				state.goalsDetails = state.goalsDetails.map((singleGoal) =>
					singleGoal?.goalId === action.payload?.goalId ? action.payload : singleGoal,
				);
			} else {
				state.goalsDetails = [...state.goalsDetails, action.payload];
			}

			localStorage.setItem("goalsDetails", JSON.stringify(state.goalsDetails));
		},
	},
});

export const { setGoals, setGoalChange, addGoalDetail } = goalSlice.actions;
export default goalSlice.reducer;
