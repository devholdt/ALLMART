import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Loader = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	max-width: 900px;
	margin: auto;

	h1,
	h2 {
		margin-bottom: 0.5em;
	}

	h2 {
		margin-top: 2em;
	}
`;

export const Product = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1em;
	padding-bottom: 3em;
	border-bottom: 1px solid ${(props) => props.theme.colors.white};

	img {
		width: 100%;
		height: 400px;
		object-fit: cover;
	}

	.product-tags {
		display: flex;
		gap: 0.5em;
		margin-top: 0.5em;

		span {
			background-color: ${(props) => props.theme.colors.primary};
			color: ${(props) => props.theme.colors.black};
			padding: 2px 8px 4px;
			border-radius: 6px;
		}
	}

	.product-details {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.product-top {
		display: flex;
		align-items: start;
		justify-content: space-between;

		.regular-price {
			font-size: ${(props) => props.theme.fontSizes.large};
			font-weight: bold;
		}

		.discounted-price {
			display: flex;
			flex-direction: column;
		}

		.old-price {
			font-size: ${(props) => props.theme.fontSizes.smaller};
			text-decoration: line-through;
		}

		.new-price {
			font-size: ${(props) => props.theme.fontSizes.large};
			color: ${(props) => props.theme.colors.redAlt};
			font-weight: bold;
		}

		.product-rating {
			display: flex;
			align-items: center;
			gap: 0.3em;

			svg {
				transform: scale(0.9);
			}
		}
	}

	.product-cart {
		button {
			width: 100%;
			padding: 1em;
			margin-bottom: 1em;
			font-size: 1em;
			font-weight: bold;
			text-transform: uppercase;
			border: none;
			background-color: ${(props) => props.theme.colors.primary};
			cursor: pointer;
		}
	}
`;

export const ProductReview = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	padding-bottom: 3em;

	.product-review {
		display: flex;
		flex-direction: column;
		background-color: ${(props) => props.theme.colors.black};
		gap: 0.5em;
		padding: 1em;

		h3,
		p {
			margin: 0;
		}
	}
`;

export const StyledToast = styled(ToastContainer).attrs({
	toastClassName: "toast",
	bodyClassName: "body",
	progressClassName: "progress",
})`
	.toast {
		color: ${(props) => props.theme.colors.white};
		background-color: ${(props) => props.theme.colors.black};
		box-shadow: ${(props) => props.theme.boxShadows.primaryInset};
	}

	.body {
		background-color: ${(props) => props.theme.colors.black};
	}

	.progress {
		background-color: ${(props) => props.theme.colors.primary};
	}
`;
