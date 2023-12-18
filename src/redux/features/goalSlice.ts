import { Goal } from "@/generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoalState {
	goals: Goal[];
	goalChange: boolean;
	goalsDetails: Goal[];
}

const initialState: GoalState = {
	goals: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("goals") || "[]") : [],
	goalChange: false,
	goalsDetails:
		typeof window !== "undefined" ? JSON.parse(localStorage.getItem("goalsDetails") || "[]") : [],
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
			if (typeof window !== "undefined")
				localStorage.setItem("goals", JSON.stringify(action.payload));
		},
		deleteGoal: (state, action: PayloadAction<Goal["goalId"]>) => {
			state.goals = state.goals.filter((singleGoal) => singleGoal?.goalId !== action.payload);
			if (typeof window !== "undefined") localStorage.setItem("goals", JSON.stringify(state.goals));

			state.goalsDetails = state.goalsDetails.filter(
				(singleGoal) => singleGoal?.goalId !== action.payload,
			);
			if (typeof window !== "undefined")
				localStorage.setItem("goalsDetails", JSON.stringify(state.goalsDetails));
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

			if (typeof window !== "undefined")
				localStorage.setItem("goalsDetails", JSON.stringify(state.goalsDetails));
		},
	},
});

export const { setGoals, setGoalChange, addGoalDetail, deleteGoal } = goalSlice.actions;
export default goalSlice.reducer;
