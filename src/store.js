import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/Cart/cartSlice";
import checkedOutReducer from "./components/Cart/checkedOutSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		checkedOut: checkedOutReducer,
	},
});
