import React from "react";
import { useApi } from "../../hooks/useApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";
import { Link } from "react-router-dom";
import StarsDisplay from "../StarsDisplay";
import * as S from "./styles";

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
			<S.Container>
				{data.map((product) => (
					<S.ProductCard key={product.id}>
						<S.ProductTop>
							<S.ProductTitle>
								<h3>{product.title}</h3>
								<Link to={`/product/${product.id}`}>view</Link>
							</S.ProductTitle>
							<S.ProductTags>
								{product.tags.map((tag) => {
									return (
										<S.ProductTag key={tag} className="product-tag">
											{tag}{" "}
										</S.ProductTag>
									);
								})}
							</S.ProductTags>
							<S.ProductImage src={product.image.url} alt={product.title} />
						</S.ProductTop>

						<S.ProductDescription>{product.description}</S.ProductDescription>

						<S.ProductBottom>
							<S.ProductRating>
								<span>
									<StarsDisplay rating={product.rating} />
								</span>
								<span>{product.reviews.length} review(s)</span>
							</S.ProductRating>
							<S.ProductPrice>
								<span>{product.price}kr</span>
								<button onClick={() => dispatch(addToCart(product))}>
									Add to cart
								</button>{" "}
							</S.ProductPrice>
						</S.ProductBottom>
					</S.ProductCard>
				))}
			</S.Container>
		</div>
	);
}

export default Products;
