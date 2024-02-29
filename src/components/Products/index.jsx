import React from "react";
import { useApi } from "../../hooks/useApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Rating from "../Rating";
import * as S from "./styles";

import { Grid } from "react-loader-spinner";

function Products() {
	const url = "https://v2.api.noroff.dev/online-shop";
	const { data, isLoading, isError } = useApi(url);
	const dispatch = useDispatch();

	const CloseButton = ({ closeToast }) => (
		<Icon iconName="close" color="#fff" onClick={closeToast} />
	);

	if (isLoading) {
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
									<Rating rating={product.rating} />
								</span>
								<span>{product.reviews.length} review(s)</span>
							</S.ProductRating>
							<S.ProductPrice>
								<span>{product.price}kr</span>
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
									<Icon iconName="addToCart" color="#1c1c1c" />
								</button>
							</S.ProductPrice>
						</S.ProductBottom>
					</S.ProductCard>
				))}
				<S.StyledToast
					pauseOnFocusLoss={false}
					closeButton={CloseButton}
					transition={Zoom}
				/>
			</S.Container>
		</div>
	);
}

export default Products;
