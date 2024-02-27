import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
			</Route>
		</Routes>
	);
}

export default App;
