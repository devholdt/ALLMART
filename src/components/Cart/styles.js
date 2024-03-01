import styled from "styled-components";

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 1em;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	max-width: 600px;

	h2 {
		border-bottom: 2px solid ${(props) => props.theme.colors.white};
		margin: 0 0.5em;
		padding: 0 0.5em 0.5em;
	}
`;

export const CartEmpty = styled.div`
	color: ${(props) => props.theme.colors.white};
	text-align: center;
`;

export const CartItem = styled.div`
	display: flex;
	align-items: center;
	padding: 1em;
	margin: 0 0.5em;
	border-bottom: 1px dotted ${(props) => props.theme.colors.white};
`;

export const CartImage = styled.img`
	max-width: 80px;
	width: 100%;
	height: 50px;
	object-fit: cover;
`;

export const CartTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5em;
	margin: 0 1em;
	flex: 1;

	h3 {
		color: ${(props) => props.theme.colors.white};
		font-size: ${(props) => props.theme.fontSizes.normal};
		line-height: 20px;
	}

	a {
		color: ${(props) => props.theme.colors.primary};
		font-style: italic;
		text-decoration: none;
	}
`;

export const CartQuantity = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5em;

	p {
		padding: 0.4em 0.6em;
		border-radius: 5px;
		border: 1px solid ${(props) => props.theme.colors.white};
		font-size: ${(props) => props.theme.fontSizes.small};
	}

	button {
		font-size: ${(props) => props.theme.fontSizes.large};
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
`;

export const CartBottom = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1em 1.5em 0.5em;

	.empty-cart {
		display: flex;
		height: 100%;
		color: ${(props) => props.theme.colors.white};
		background-color: transparent;
		font-size: ${(props) => props.theme.fontSizes.normal};
		font-style: italic;
		text-decoration: underline;
		border: none;
		cursor: pointer;
		padding: 0;
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
		color: ${(props) => props.theme.colors.black};
		border-radius: 5px;
		cursor: pointer;
	}

	.cart-checkout:hover {
		background-color: ${(props) => props.theme.colors.primaryAlt};
	}
`;
