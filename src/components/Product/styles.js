import styled from "styled-components";

export const Loader = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 900px;
	margin: auto;
	padding: 1em;

	h3 {
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
	border-radius: ${(props) => props.theme.borderRadius.smooth};

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 400px;
	object-fit: cover;

	@media (max-width: 500px) {
		height: 300px;
	}
`;

export const Tags = styled.div`
	display: flex;
	gap: 0.5em;
	margin-top: 0.5em;

	span {
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.black};
		padding: 2px 8px 4px;
		border-radius: ${(props) => props.theme.borderRadius.smooth};
	}
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding-bottom: 1em;
`;

export const Top = styled.div`
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

		@media (max-width: 330px) {
			span {
				display: none;
			}
		}
	}
`;

export const Cart = styled.div`
	display: flex;
	gap: 1em;
	height: 40px;

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

		@media (max-width: 500px) {
			font-size: 0.8em;
		}
	}
`;

export const Reviews = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	padding-bottom: 3em;
`;

export const Review = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.black};
	gap: 0.5em;
	padding: 1em;
	box-shadow: ${(props) => props.theme.boxShadows.white};
	border-radius: ${(props) => props.theme.borderRadius.smooth};

	h3,
	p {
		margin: 0;
	}
`;

export const Error = styled.div`
	width: fit-content;
	padding: 0.5em 1.5em;
	background-color: ${(props) => props.theme.colors.red};
	color: ${(props) => props.theme.colors.black};
`;
