import { Todo } from "@/generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
	todos: Todo[];
	todoChange: boolean;
}

const initialState: TaskState = {
	todos: [],
	todoChange: false,
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		setTodos: (state, action: PayloadAction<Todo[]>) => {
			state.todos = action.payload;
		},
		setTodoChange: (state) => {
			state.todoChange = !state.todoChange;
		},
	},
});

export const { setTodos, setTodoChange } = todoSlice.actions;
export default todoSlice.reducer;