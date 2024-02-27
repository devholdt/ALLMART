import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

function Nav() {
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
					<Link to="/cart">Cart</Link>
				</S.Item>
			</S.List>
		</nav>
	);
}

export default Nav;
