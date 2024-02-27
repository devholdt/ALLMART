import React from "react";
import { useApi } from "../../hooks/useApi";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as S from "./styles";

function Products() {
	const url = "https://v2.api.noroff.dev/online-shop";
	const { data, isLoading, isError } = useApi(url);
	// const dispatch = useDispatch();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error fetching data</p>;
	}

	return (
		<div>
			<h2>Products</h2>
			<S.Container>
				{data.map((product) => (
					<S.ProductCard key={product.id}>
						<S.ProductTitle>
							<Link to={`/product/${product.id}`}>{product.title}</Link>
						</S.ProductTitle>
						<div>
							{product.tags.map((tag) => {
								return (
									<span key={tag} className="product-tag">
										{tag}
									</span>
								);
							})}
						</div>
						<S.ProductImage src={product.image.url} alt={product.title} />
						{product.description}
						<S.ProductRating>
							{/* <p>
								<StarsDisplay rating={product.rating} />
							</p> */}
							<span>Rating: {product.rating}</span>
							<span>{product.reviews.length} review(s)</span>
						</S.ProductRating>
						<S.ProductBottom>
							<p>{product.price}kr</p>
							<button>Add to cart</button>
							{/* <button onClick={() => dispatch(addToCart(product))}>
								Add to cart
							</button>{" "} */}
						</S.ProductBottom>
					</S.ProductCard>
				))}
			</S.Container>
		</div>
	);
}

export default Products;
