import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Sidebar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<S.Container>
			<Menu
				right
				isOpen={menuOpen}
				onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
			>
				<Link onClick={closeMenu} to="/">
					Home
				</Link>
				<Link onClick={closeMenu} to="/contact">
					Contact
				</Link>
				<Link onClick={closeMenu} to="/cart">
					Cart
				</Link>
			</Menu>
		</S.Container>
	);
};

export default Sidebar;
