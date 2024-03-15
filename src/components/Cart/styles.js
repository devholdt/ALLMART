import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 1em;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: ${(props) => props.theme.boxShadows.white};
	border-radius: 10px;
	max-width: 600px;
`;

export const Empty = styled.div`
	color: ${(props) => props.theme.colors.white};
	text-align: center;
`;

export const Heading = styled.h2`
	border-bottom: 2px solid ${(props) => props.theme.colors.white};
	margin: 0 0.25em;
	padding: 0 0.25em 0.5em;
`;

export const Item = styled.div`
	display: flex;
	align-items: center;
	padding: 1em 0.25em;
	margin: 0 0.5em;
	gap: 1em;
	border-bottom: 1px dotted ${(props) => props.theme.colors.white};

	.cart-left {
		display: flex;
		align-items: center;
		gap: 1em;
		flex: 1;

		img {
			max-width: 100px;
			width: 100%;
			height: 50px;
			object-fit: cover;
		}

		.title {
			a {
				color: ${(props) => props.theme.colors.white};
			}
		}

		@media (max-width: 500px) {
			gap: 0.5em;
			font-size: ${(props) => props.theme.fontSizes.small};

			img {
				max-width: 50px;
			}
		}

		@media (max-width: 330px) {
			img {
				display: none;
			}
		}
	}

	.quantity-selector {
		display: flex;
		height: 40px;
	}
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 0.25em;
	padding: 1em 0.5em 0.5em;

	.empty-cart {
		display: flex;
		height: 100%;
		color: ${(props) => props.theme.colors.white};
		background-color: transparent;
		font-size: ${(props) => props.theme.fontSizes.normal};
		font-style: italic;
		text-decoration: underline;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	.cart-total {
		margin-top: 0;

		span {
			color: ${(props) => props.theme.colors.primary};
			font-weight: bold;
		}
	}

	.cart-checkout {
		padding: 0.5em 1em;
		font-size: ${(props) => props.theme.fontSizes.normal};
		font-weight: bold;
		text-transform: uppercase;
		border: none;
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.dark};
		transition: all 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			background-color: ${(props) => props.theme.colors.primaryAlt};
			box-shadow: ${(props) => props.theme.boxShadows.primary};
		}
	}

	.cart-checkout:disabled {
		background-color: ${(props) => props.theme.colors.darkAlt};
		color: ${(props) => props.theme.colors.black};
		cursor: not-allowed;

		&:hover {
			box-shadow: none;
		}
	}
`;
