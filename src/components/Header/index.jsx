import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderElement = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #252525;
	color: #fff;
	box-shadow: 0 0 10px 0 #252525;
	z-index: 100;

	ul {
		display: flex;
		justify-content: center;
		margin: 0;
		padding: 0;
		list-style: none;
		gap: 1rem;
	}

	li a {
		text-decoration: none;
		color: #fff;
	}
`;

function Header() {
	return (
		<HeaderElement>
			<div>ALLMART</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</HeaderElement>
	);
}

export default Header;
