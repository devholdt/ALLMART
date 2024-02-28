import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./cartSlice";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import * as S from "./styles";

function Cart() {
	const { products: cartProducts, totalCost } = useSelector(
		(state) => state.cart
	);
	const dispatch = useDispatch();

	return (
		<main>
			<h1>Cart</h1>
			<S.CartContainer>
				<h2>Receipt</h2>
				<S.CartTable>
					<tbody>
						<S.CartRow>
							<S.CartHeader>Product</S.CartHeader>
							<S.CartHeader>Quantity</S.CartHeader>
							<S.CartHeader>Price</S.CartHeader>
						</S.CartRow>
						{cartProducts.map((product) => (
							<S.CartRow key={product.id}>
								<S.CartData>{product.title}</S.CartData>
								<S.CartData>
									x{product.quantity}{" "}
									<button onClick={() => dispatch(removeFromCart(product))}>
										<Icon iconName="remove" color="#E94E77" />
									</button>
								</S.CartData>
								<S.CartData>{product.price}kr</S.CartData>
								<S.CartData>
									<Link to={`/product/${product.id}`}>view</Link>
								</S.CartData>
							</S.CartRow>
						))}
					</tbody>
				</S.CartTable>

				<S.CartTotal>
					<p>
						TOTAL <span>{totalCost.toFixed(2)}kr</span>
					</p>
					<button onClick={() => dispatch(clearCart())}>
						<Icon iconName="trash" color="#E94E77" />
					</button>
				</S.CartTotal>
			</S.CartContainer>
		</main>
	);
}

export default Cart;
