import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../Cart/cartSlice";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import * as S from "./styles";

function Nav() {
	const cartCount = useSelector(selectCartItemCount);

	let cartCounter;

	if (cartCount > 99) {
		cartCounter = <S.CartCounter countThresh>99+</S.CartCounter>;
	} else {
		cartCounter = <S.CartCounter>{cartCount}</S.CartCounter>;
	}

	return (
		<nav>
			<S.List>
				<S.Item>
					<Link to="/">Home</Link>
				</S.Item>
				<S.Item>
					<Link to="/contact">Contact</Link>
				</S.Item>
				<S.Item>
					<Link to="/cart">
						<S.CartIcon>
							<Icon iconName="cart" color="#1c1c1c" />
							{cartCounter}
						</S.CartIcon>
					</Link>
				</S.Item>
			</S.List>
		</nav>
	);
}

export default Nav;
