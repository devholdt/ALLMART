import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./cartSlice";
import { Link } from "react-router-dom";

function Cart() {
	const { products: cartProducts, totalCost } = useSelector(
		(state) => state.cart
	);
	const dispatch = useDispatch();

	return (
		<main>
			<h1>Cart</h1>
			<div>
				<div>
					{cartProducts.map((product) => (
						<p key={product.id}>
							{product.title} x{product.quantity}{" "}
							<button onClick={() => dispatch(removeFromCart(product))}>
								Remove 1
							</button>{" "}
							<Link to={`/products/${product.id}`}>View</Link>
						</p>
					))}
				</div>
				<div>
					Total Cost: {totalCost.toFixed(2)} NOK{" "}
					<button onClick={() => dispatch(clearCart())}>Clear cart</button>
				</div>
			</div>
		</main>
	);
}

export default Cart;
