import React, { useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, clearCart } from "./cartSlice";
import { checkout as checkoutCheckedOut } from "./checkedOutSlice";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import * as S from "./styles";

function Cart() {
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

				<S.CartEmpty>{isCartEmpty && <p>The cart is empty</p>}</S.CartEmpty>

				{cartProducts.map((product) => (
					<S.CartItem key={product.id}>
						<S.CartImage src={product.image.url} alt={product.title} />
						<S.CartTitle>
							<h3>{product.title}</h3>
							<Link to={`/product/${product.id}`}>view</Link>
						</S.CartTitle>
						<S.CartQuantity>
							<button onClick={() => dispatch(removeFromCart(product))}>
								<Icon iconName="remove" color="#E94E77" />
							</button>
							<p>x{product.quantity}</p>
							<button
								onClick={() => {
									dispatch(addToCart({ ...product, quantity: 1 }));
								}}
							>
								<Icon iconName="add" color="#C9F66F" />
							</button>
						</S.CartQuantity>
					</S.CartItem>
				))}

				<S.CartBottom>
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
				</S.CartBottom>
			</S.CartContainer>
		</main>
	);
}

export default Cart;
