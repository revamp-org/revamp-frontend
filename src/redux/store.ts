import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import navbarReducer from "./features/navbarSlice";
import goalReducer from "./features/goalSlice";
import taskReducer from "./features/taskSlice";

export const store = configureStore({
	reducer: {
		menu: navbarReducer,
		goal: goalReducer,
		task: taskReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
