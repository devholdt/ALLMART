import styled from "styled-components";

export const Loader = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1em;

	@media (max-width: 1280px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5em;
	}

	@media (max-width: 440px) {
		grid-template-columns: 1fr;
	}
`;

export const Product = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: ${(props) => props.theme.borderRadius.smooth};
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: ${(props) => props.theme.boxShadows.white};
	padding: 0 1em;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Title = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
	margin-top: 1em;
	margin-bottom: 0.2em;

	h3 {
		margin: 0;
	}

	a {
		height: fit-content;
		color: ${(props) => props.theme.colors.primary};
		font-style: italic;
		text-decoration: none;
		margin-left: 4px;
	}
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 4px;
`;

export const Tag = styled.span`
	font-size: 0.8em;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.black};
	padding: 1px 6px 2px;
	border-radius: ${(props) => props.theme.borderRadius.smooth};
`;

export const Image = styled.img`
	height: 100px;
	width: 100%;
	object-fit: cover;
	margin: 1em 0;

	@media (max-width: 1280px) {
		height: 200px;
	}
`;

export const Description = styled.p`
	height: 3em;
	margin-top: 0;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.5em;
`;

export const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.5em;
	margin: 1em 0;
`;

export const ProductRating = styled.div`
	display: flex;
	flex-direction: column;
	font-style: italic;

	svg {
		transform: scale(0.9);
	}

	span:last-child {
		font-size: 0.9em;
	}
`;

export const Price = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.discounted-price {
		display: flex;
		flex-direction: column;
		gap: 0em;
	}

	.old-price {
		font-size: 0.8em;
		text-decoration: line-through;
	}

	.new-price {
		color: ${(props) => props.theme.colors.redAlt};
		font-weight: bold;
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background-color: ${(props) => props.theme.colors.primaryAlt};
		width: 33px;
		height: 33px;
		font-size: 1em;
		border-radius: ${(props) => props.theme.borderRadius.round};
		transition: all 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			box-shadow: ${(props) => props.theme.boxShadows.primary};
		}
	}
`;
