import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../Cart/cartSlice";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import * as S from "./styles";

import { slide as Menu } from "react-burger-menu";

function Nav() {
	const cartCount = useSelector(selectCartItemCount);

	let cartCounter;

	if (cartCount > 99) {
		cartCounter = <S.CartCounter countThresh>99+</S.CartCounter>;
	} else {
		cartCounter = <S.CartCounter>{cartCount}</S.CartCounter>;
	}

	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<nav>
			<S.List>
				<S.Item className="menu-item">
					<Link to="/">Home</Link>
				</S.Item>
				<S.Item className="menu-item">
					<Link to="/contact">Contact</Link>
				</S.Item>
				<S.Item className="menu-item">
					<Link to="/cart">
						<S.CartIcon>
							<Icon iconName="cart" color="#1c1c1c" />
							{cartCounter}
						</S.CartIcon>
					</Link>
				</S.Item>
			</S.List>
			<S.SidebarContainer>
				<Menu
					right
					isOpen={menuOpen}
					onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
					width={"100%"}
				>
					<S.Item>
						<Link onClick={closeMenu} to="/">
							Home
						</Link>
					</S.Item>
					<S.Item>
						<Link onClick={closeMenu} to="/contact">
							Contact
						</Link>
					</S.Item>
					<S.Item>
						<Link onClick={closeMenu} to="/cart">
							<S.CartIcon>
								<Icon iconName="cart" color="#1c1c1c" />
								{cartCounter}
							</S.CartIcon>
						</Link>
					</S.Item>
				</Menu>
			</S.SidebarContainer>
		</nav>
	);
}

export default Nav;
