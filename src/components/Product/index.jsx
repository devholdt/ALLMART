import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";
import { toast, Zoom } from "react-toastify";
import { Grid } from "react-loader-spinner";
import Icon from "../Icon";
import Rating from "../Rating";
import * as S from "./styles";
import "react-toastify/dist/ReactToastify.css";

function Product() {
	let { id } = useParams();
	const url = `https://v2.api.noroff.dev/online-shop/${id}`;
	const { data: product, isLoading, isError } = useApi(url);
	const dispatch = useDispatch();

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

	const CloseButton = ({ closeToast }) => (
		<Icon iconName="close" color="#fff" onClick={closeToast} />
	);

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
								<div>
									<Rating rating={product.rating} />
									<button>
										<Icon iconName="down" color="#FFFFFF" />
									</button>
								</div>
								{product.reviews ? product.reviews.length : 0} review(s)
							</div>
						</div>

						<div className="product-cart">
							<button
								onClick={() => {
									dispatch(addToCart(product));
									toast.success(`${product.title} added to cart!`, {
										position: "bottom-right",
										autoClose: 1000,
										hideProgressBar: true,
										closeOnClick: true,
										pauseOnHover: false,
										draggable: true,
										progress: undefined,
										icon: () => <Icon iconName="check" color="#c9f66f" />,
									});
								}}
							>
								Add to cart <Icon iconName="addToCart" color="#1c1c1c" />
							</button>
							<hr />
						</div>

						<div className="product-description">{product.description}</div>
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
			<S.StyledToast
				pauseOnFocusLoss={false}
				closeButton={CloseButton}
				transition={Zoom}
			/>
		</main>
	);
}

export default Product;
