import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	totalCost: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const existingProductIndex = state.products.findIndex(
				(product) => product.id === action.payload.id
			);
			if (existingProductIndex >= 0) {
				state.products[existingProductIndex].quantity += 1;
			} else {
				state.products.push({ ...action.payload, quantity: 1 });
			}
			state.totalCost = state.products.reduce(
				(total, product) => total + product.discountedPrice * product.quantity,
				0
			);
		},
		removeFromCart: (state, action) => {
			const index = state.products.findIndex(
				(product) => product.id === action.payload.id
			);
			if (index !== -1) {
				if (state.products[index].quantity > 1) {
					state.products[index].quantity -= 1;
				} else {
					state.products.splice(index, 1);
				}
			}
			state.totalCost = state.products.reduce(
				(total, product) => total + product.discountedPrice * product.quantity,
				0
			);
		},
		clearCart: (state) => {
			state.products = [];
			state.totalCost = 0;
		},
		checkout: (state) => {
			state.products = [];
			state.totalCost = 0;
		},
	},
});

export const { addToCart, removeFromCart, clearCart, checkout } =
	cartSlice.actions;
export const selectCartItemCount = (state) =>
	state.cart.products.reduce((total, product) => total + product.quantity, 0);

export default cartSlice.reducer;
