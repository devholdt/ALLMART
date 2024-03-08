import React, { useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, clearCart } from "./cartSlice";
import { checkout as checkoutCheckedOut } from "./checkedOutSlice";
import { Link } from "react-router-dom";
import QuantitySelector from "../QuantitySelector";
import DocumentTitle from "../DocumentTitle";
import * as S from "./styles";

function Cart() {
	DocumentTitle("Cart");

	const { products: cartProducts, totalCost } = useSelector(
		(state) => state.cart
	);
	const dispatch = useDispatch();

	const listRef = useRef(null);

	useEffect(() => {
		listRef.current && autoAnimate(listRef.current);
	}, [listRef]);

	const isCartEmpty = cartProducts.length === 0;

	return (
		<main>
			<h1>Cart</h1>

			<S.CartContainer ref={listRef}>
				<h2>Receipt</h2>

				<div className="cart-empty">
					{isCartEmpty && <p>The cart is empty</p>}
				</div>

				{cartProducts.map((product) => (
					<S.CartItem key={product.id}>
						<img src={product.image.url} alt={product.title} />
						<div className="title">
							<h3>{product.title}</h3>
							<Link to={`/product/${product.id}`}>view</Link>
						</div>
						<div className="quantity-selector">
							<QuantitySelector
								quantity={product.quantity}
								setQuantity={(value) => {
									if (value >= 1 && value <= 999) {
										dispatch(
											addToCart({
												...product,
												quantity: value - product.quantity,
											})
										);
									} else if (value < 1) {
										dispatch(removeFromCart(product));
									}
								}}
								allowZero={true}
							/>
						</div>
					</S.CartItem>
				))}

				<div className="cart-bottom">
					<button
						className="empty-cart"
						style={{
							visibility: cartProducts.length > 0 ? "visible" : "hidden",
						}}
						onClick={() => dispatch(clearCart())}
					>
						empty cart
					</button>
					<div>
						<p className="cart-total">
							Total: <span>{totalCost.toFixed(2)}kr</span>
						</p>
						<Link to={`/checkout`}>
							<button
								className="cart-checkout"
								disabled={isCartEmpty}
								onClick={() => {
									dispatch(
										checkoutCheckedOut({ products: cartProducts, totalCost })
									);
									dispatch(clearCart());
								}}
							>
								Checkout
							</button>
						</Link>
					</div>
				</div>
			</S.CartContainer>
		</main>
	);
}

export default Cart;
