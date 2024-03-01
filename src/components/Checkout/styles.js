import styled from "styled-components";

export const CheckoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.black};
	box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	max-width: 400px;
	padding: 2em 1em 1em;
`;

export const CheckoutHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid ${(props) => props.theme.colors.black};
	width: 100%;
	padding: 1em 0;
`;

export const CheckoutItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	width: 100%;
	padding: 1em 0;
	margin: 0;
	font-size: ${(props) => props.theme.fontSizes.normal};
	line-height: 20px;
	color: ${(props) => props.theme.colors.black};

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		border-bottom: 1px dotted ${(props) => props.theme.colors.black};
	}

	.item h3,
	.item p {
		margin: 0;
		padding: 0;
	}

	.item div {
		display: flex;
		gap: 0.5em;
	}
`;

export const CheckoutBottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: right;
	border-top: 1px solid ${(props) => props.theme.colors.black};
	width: 100%;
	margin: 0;
	padding: 0;

	p {
		font-size: ${(props) => props.theme.fontSizes.large};
	}

	.total-cost {
		font-weight: bold;
	}

	button {
		background-color: ${(props) => props.theme.colors.primaryAlt};
		color: ${(props) => props.theme.colors.darkAlt};
		border: none;
		border: 1px solid ${(props) => props.theme.colors.whiteAlt};
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		width: 100%;
		padding: 1em;
	}
`;
