import { createSlice } from "@reduxjs/toolkit";

const cartItems = localStorage.getItem("cart");
const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
const totalCost = parsedCartItems.reduce(
	(total, product) => total + product.discountedPrice * product.quantity,
	0
);

const initialState = {
	products: parsedCartItems,
	totalCost: totalCost,
};

const calculateTotalCost = (products) => {
	return products.reduce(
		(total, product) => total + product.discountedPrice * product.quantity,
		0
	);
};

const updateLocalStorage = (products) => {
	localStorage.setItem("cart", JSON.stringify(products));
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const index = state.products.findIndex(
				(product) => product.id === action.payload.id
			);
			if (index >= 0) {
				state.products[index].quantity += action.payload.quantity;
			} else {
				state.products.push({
					...action.payload,
					quantity: action.payload.quantity || 1,
				});
			}
			state.totalCost = calculateTotalCost(state.products);
			updateLocalStorage(state.products);
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
			state.totalCost = calculateTotalCost(state.products);
			updateLocalStorage(state.products);
		},
		clearCart: (state) => {
			state.products = [];
			state.totalCost = 0;
			updateLocalStorage(state.products);
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const selectCartItemCount = (state) =>
	state.cart.products.reduce((total, product) => total + product.quantity, 0);

export default cartSlice.reducer;
