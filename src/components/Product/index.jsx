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
		return <p>Error fetching product</p>;
	}

	return (
		<main>
			<h1>{product.title}</h1>
			<S.ProductContainer>
				{product.image && (
					<S.ProductImage src={product.image.url} alt={product.title} />
				)}
				<p>{product.description}</p>
				<p>{product.price}kr</p>
				<S.ProductRating>
					<span>
						<Rating rating={product.rating} />
					</span>
					<span>{product.reviews ? product.reviews.length : 0} review(s)</span>
				</S.ProductRating>
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
			</S.ProductContainer>
			<S.StyledToast
				pauseOnFocusLoss={false}
				closeButton={CloseButton}
				transition={Zoom}
			/>
		</main>
	);
}

export default Product;
