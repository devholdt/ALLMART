import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	totalCost: 0,
};

export const checkedOutSlice = createSlice({
	name: "checkedOut",
	initialState,
	reducers: {
		checkout: (state, action) => {
			state.products = action.payload.products;
			state.totalCost = action.payload.totalCost;
		},
		clearCheckedOut: (state) => {
			state.products = [];
			state.totalCost = 0;
		},
	},
});

export const { checkout, clearCheckedOut } = checkedOutSlice.actions;

export default checkedOutSlice.reducer;
