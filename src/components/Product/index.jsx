import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";
import { Grid } from "react-loader-spinner";
import { Container as ToastContainer, Emitter as ToastEmitter } from "../Toast";
import QuantitySelector from "../QuantitySelector";
import DocumentTitle from "../DocumentTitle";
import Icon from "../Icon";
import Rating from "../Rating";
import * as S from "./styles";
import "react-toastify/dist/ReactToastify.css";

function Product() {
	const [quantity, setQuantity] = useState(1);
	let { id } = useParams();
	const url = `https://v2.api.noroff.dev/online-shop/${id}`;
	const { data: product, isLoading, isError } = useApi(url);
	const dispatch = useDispatch();

	DocumentTitle(product?.title);

	if (isLoading || !product) {
		return (
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
		);
	}

	if (isError) {
		return <p>Error fetching product</p>;
	}

	return (
		<main>
			<S.Container>
				<h1>{product.title}</h1>
				<S.Product>
					<div>
						<img src={product.image?.url} alt={product.title} />
						<div className="product-tags">
							{product.tags?.map((tag) => {
								return <span key={tag}>{tag} </span>;
							})}
						</div>
					</div>
					<div className="product-details">
						<div className="product-top">
							<div>
								{product.price === product.discountedPrice ? (
									<span className="regular-price">{product.price}kr</span>
								) : (
									<div className="discounted-price">
										<span className="old-price">{product.price}kr</span>{" "}
										<span className="new-price">
											{product.discountedPrice}kr
										</span>
									</div>
								)}
							</div>
							<div className="product-rating">
								<span>
									<Rating rating={product.rating} />
								</span>
								{product.reviews ? product.reviews.length : 0} review(s)
							</div>
						</div>

						<div className="product-cart">
							<QuantitySelector quantity={quantity} setQuantity={setQuantity} />
							<button
								className="add-to-cart"
								onClick={() => {
									dispatch(addToCart({ ...product, quantity }));
									ToastEmitter({
										type: "success",
										message: `${product.title} x${quantity} added to cart`,
									});
								}}
							>
								Add to cart <Icon iconName="addToCart" color="#1c1c1c" />
							</button>
						</div>
						<div className="product-description">
							<hr />
							{product.description}
						</div>
					</div>
				</S.Product>
				<h2>Reviews</h2>
				<S.ProductReview>
					{product.reviews?.length > 0 ? (
						product.reviews?.map((review) => {
							return (
								<div className="product-review" key={review.id}>
									<h3>{review.username}</h3>
									<p>{review.description}</p>
									<div>
										<Rating rating={review.rating} />
									</div>
								</div>
							);
						})
					) : (
						<p>No reviews yet</p>
					)}
				</S.ProductReview>
			</S.Container>
			<ToastContainer />
		</main>
	);
}

export default Product;
