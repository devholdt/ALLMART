import styled from "styled-components";

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 1em 2em;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	max-width: 600px;

	h2 {
		border-bottom: 2px solid ${(props) => props.theme.colors.white};
		padding: 0.5em;
		margin: 0;
	}
`;

export const CartItem = styled.div`
	display: flex;
	align-items: center;
	padding: 1em;
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
		font-size: 1em;
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
	gap: 0.7em;
	font-size: 0.9em;

	p {
		padding: 0.4em 0.6em;
		border-radius: 5px;
		border: 1px solid ${(props) => props.theme.colors.white};
	}

	button {
		font-size: 1.1em;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
`;

export const CartTotal = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 1em;

	span {
		color: ${(props) => props.theme.colors.primary};
		font-weight: bold;
	}

	button {
		color: ${(props) => props.theme.colors.white};
		background-color: transparent;
		font-size: 1em;
		font-style: italic;
		text-decoration: underline;
		border: none;
		cursor: pointer;
	}
`;
