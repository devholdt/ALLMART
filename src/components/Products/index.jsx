import React, { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";
import { Link } from "react-router-dom";
import { Grid } from "react-loader-spinner";
import { Container as ToastContainer, Emitter as ToastEmitter } from "../Toast";
import Search from "../Search";
import Icon from "../Icon";
import Rating from "../Rating";
import * as S from "./styles";
import "react-toastify/dist/ReactToastify.css";

function Products() {
	const url = "https://v2.api.noroff.dev/online-shop";
	const { data, isLoading, isError } = useApi(url);
	const [filteredData, setFilteredData] = useState([]);
	const dispatch = useDispatch();

	if (isLoading) {
		return (
			<main>
				<S.Loader>
					<Grid
						visible={true}
						height="80"
						width="80"
						color="#c9f66f"
						ariaLabel="grid-loading"
						radius="12.5"
						wrapperStyle={{}}
						wrapperClass="grid-wrapper"
					/>
				</S.Loader>
			</main>
		);
	}

	if (isError) {
		return (
			<main>
				<p>Error fetching products</p>;
			</main>
		);
	}

	return (
		<main>
			<h2>Products</h2>
			<Search data={data} setFilteredData={setFilteredData} />
			<S.Container>
				{filteredData.length === 0 ? (
					<p>No products found. Please try a different query.</p>
				) : (
					filteredData.map((product) => (
						<S.Product key={product.id}>
							<S.Header>
								<S.Title>
									<h3>{product.title}</h3>
									<Link to={`/product/${product.id}`}>view</Link>
								</S.Title>
								<S.Tags>
									{product.tags.map((tag) => {
										return (
											<S.Tag key={tag} className="product-tag">
												{tag}{" "}
											</S.Tag>
										);
									})}
								</S.Tags>
								<S.Image src={product.image?.url} alt={product.title} />
							</S.Header>

							<S.Description>{product.description}</S.Description>

							<S.Bottom>
								<S.ProductRating>
									<span>
										<Rating rating={product.rating} />
									</span>
									<span>{product.reviews.length} review(s)</span>
								</S.ProductRating>
								<S.Price>
									{product.price === product.discountedPrice ? (
										<span>{product.price}kr</span>
									) : (
										<div className="discounted-price">
											<span className="old-price">{product.price}kr</span>{" "}
											<span className="new-price">
												{product.discountedPrice}kr
											</span>
										</div>
									)}

									<button
										onClick={() => {
											dispatch(addToCart({ ...product, quantity: 1 }));
											ToastEmitter({
												type: "success",
												message: `${product.title} added to cart`,
											});
										}}
									>
										<Icon iconName="addToCart" color="#1c1c1c" />
									</button>
								</S.Price>
							</S.Bottom>
						</S.Product>
					))
				)}
			</S.Container>
			<ToastContainer />
		</main>
	);
}

export default Products;
