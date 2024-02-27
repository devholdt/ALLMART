import React from "react";
import { useParams } from "react-router-dom";

function Product() {
	let params = useParams();
	return (
		<main>
			<h1>Product</h1>
			<p>Product id: {params.id}</p>
		</main>
	);
}

export default Product;
