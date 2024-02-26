import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<header>
				<div>ALLMART</div>
				<nav>
					<ul>
						<li>Home</li>
						<li>Products</li>
						<li>Cart</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header>
			<Outlet />
			<footer>
				<div>©2024 Allmart</div>
			</footer>
		</>
	);
}

export default Layout;
