import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
	isToggled: boolean;
}

const menuState: MenuState = {
	isToggled: false,
};

export const menu = createSlice({
	name: "toggleMenu",
	initialState: menuState, // This is where you provide the initial state
	reducers: {
		toggleMenu: (state) => {
			state.isToggled = !state.isToggled;
		},
	},
});

export const { toggleMenu } = menu.actions;
export default menu.reducer;
