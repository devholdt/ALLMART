import React from "react";
import Icon from "../Icon";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../Cart/cartSlice";
import { Link } from "react-router-dom";
import * as S from "./styles";

function Nav() {
	const cartCount = useSelector(selectCartItemCount);

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
							<S.CartCounter>{cartCount}</S.CartCounter>
						</S.CartIcon>
					</Link>
				</S.Item>
			</S.List>
		</nav>
	);
}

export default Nav;
