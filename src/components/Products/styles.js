import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
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

export const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid black;
	padding: 0 1em;
`;

export const ProductTitle = styled.h3`
	a {
		color: #1c1c1c;
		text-decoration: none;
	}
`;

export const ProductImage = styled.img`
	height: 100px;
	object-fit: cover;
	margin-top: 0.5em;

	@media (max-width: 440px) {
		height: 200px;
	}
`;

export const ProductRating = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5em;
`;

export const ProductBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
