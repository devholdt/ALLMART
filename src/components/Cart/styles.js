import styled from "styled-components";

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em;
	background-color: ${(props) => props.theme.colors.black};
	color: ${(props) => props.theme.colors.white};
	border-radius: 10px;
	box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.1);
	max-width: 600px;
	margin: 1em auto;

	h2 {
		margin: 0 0 0.5em;
	}
`;

export const CartTable = styled.table`
	border-collapse: collapse;

	td,
	th {
		text-align: left;
		padding: 1em 0.5em;
		width: fit-content;
	}
`;

export const CartHeader = styled.th`
	border-bottom: 3px solid ${(props) => props.theme.colors.white};
`;

export const CartRow = styled.tr`
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 1em;
	}

	a {
		color: ${(props) => props.theme.colors.primary};
		font-style: italic;
		text-decoration: none;
	}

	td:last-child {
		border: none;
		padding-left: 0.5em;
		font-size: 0.9em;
	}
`;

export const CartData = styled.td`
	border-bottom: 1px solid ${(props) => props.theme.colors.white};
	width: 50px;
`;

export const CartTotal = styled.div`
	display: flex;
	align-items: center;
	vertical-align: middle;
	justify-content: space-between;
	margin-top: 1em;
	padding-right: 2em;

	span {
		color: ${(props) => props.theme.colors.primary};
		font-weight: bold;
	}

	button {
		font-size: 1.1em;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
`;
