import styled from "styled-components";

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
	padding: 1em;
	gap: 1em;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: ${(props) => props.theme.boxShadows.white};
	border-radius: 10px;

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
		display: flex;
		gap: 1em;
		height: 40px;

		padding: 0.25em;
		background-color: ${(props) => props.theme.colors.black};

		div {
			display: flex;

			button {
				width: 40px;
				border: none;
				font-size: ${(props) => props.theme.fontSizes.larger};
				background-color: ${(props) => props.theme.colors.dark};
				cursor: pointer;
			}

			input {
				width: 40px;
				text-align: center;
				border: none;
				font-size: ${(props) => props.theme.fontSizes.normal};
				color: ${(props) => props.theme.colors.white};
				background-color: ${(props) => props.theme.colors.blackAlt};

				&::-webkit-outer-spin-button,
				&::-webkit-inner-spin-button {
					-webkit-appearance: none;
					margin: 0;
				}

				&[type="number"] {
					appearance: textfield;
				}

				&:focus {
					outline: none;
				}
			}
		}

		.add-to-cart {
			width: 100%;
			height: 100%;
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
		box-shadow: ${(props) => props.theme.boxShadows.white};
		border-radius: 10px;

		h3,
		p {
			margin: 0;
		}
	}
`;
