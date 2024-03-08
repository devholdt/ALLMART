import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DocumentTitle from "../DocumentTitle";
import Icon from "../Icon";
import Logo from "../Logo";
import * as S from "./styles";

function Checkout() {
	const { products: checkedOutProducts, totalCost } = useSelector(
		(state) => state.checkedOut
	);
	const navigate = useNavigate();

	DocumentTitle("Checkout");

	useEffect(() => {
		if (checkedOutProducts.length === 0) {
			navigate("/cart");
		}
	}, [checkedOutProducts, navigate]);

	return (
		<main>
			<h1>Checkout</h1>

			<S.CheckoutContainer>
				<S.CheckoutHeader>
					<Logo color="black" size="140px" />
					<div>
						<h2>Thank you for shopping with us!</h2>
						<Icon iconName="circleCheck" color="#B0D65F" size="2xl" />
					</div>
				</S.CheckoutHeader>

				<S.CheckoutItems>
					{checkedOutProducts.map((product) => (
						<div className="item" key={product.id}>
							<h3>{product.title}</h3>
							<div>
								<p>{product.discountedPrice}kr</p>
								<p>x{product.quantity}</p>
							</div>
						</div>
					))}
				</S.CheckoutItems>

				<S.CheckoutBottom>
					<p>
						Total: <span className="total-cost">{totalCost.toFixed(2)}kr</span>
					</p>

					<Link to="/">
						<button>Confirm</button>
					</Link>
				</S.CheckoutBottom>
			</S.CheckoutContainer>
		</main>
	);
}

export default Checkout;
