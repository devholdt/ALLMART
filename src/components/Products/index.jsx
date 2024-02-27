import React from "react";
import { useApi } from "../../hooks/useApi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Products() {
	const url = "https://v2.api.noroff.dev/online-shop";
	const { data, isLoading, isError } = useApi(url);
	const dispatch = useDispatch();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error fetching data</p>;
	}

	return (
		<div>
			<h2>Products</h2>
			<div>
				{data.map((product) => (
					<div key={product.id}>
						<div>
							<h3>{product.title}</h3>
							<Link to={`/product/${product.id}`}>View</Link>
						</div>
						<p>{product.description}</p>
						<p>{product.price} NOK</p>
						<button
							onClick={() => {
								dispatch({
									type: "ADD_TO_CART",
									payload: product,
								});
							}}
						>
							Add to cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Products;
