import styled from "styled-components";
import { ToastContainer } from "react-toastify";

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

export const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 8px;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: ${(props) => props.theme.boxShadows.white};
	padding: 0 1em;
`;

export const ProductTop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const ProductTitle = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1em;
	margin-bottom: 0.2em;

	h3 {
		margin: 0;
	}

	a {
		color: ${(props) => props.theme.colors.primary};
		font-style: italic;
		text-decoration: none;
		margin-left: 4px;
	}
`;

export const ProductTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 4px;
`;

export const ProductTag = styled.span`
	font-size: 0.8em;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.black};
	padding: 1px 6px 2px;
	border-radius: 6px;
`;

export const ProductImage = styled.img`
	height: 100px;
	width: 100%;
	object-fit: cover;
	margin: 1em 0;

	@media (max-width: 1280px) {
		height: 200px;
	}
`;

export const ProductDescription = styled.p`
	width: 100%;
	margin: 0;

	button {
		display: block;
		margin-top: 0.2em;
		margin-left: 50%;
		float: right;
		border: none;
		background-color: transparent;
		color: ${(props) => props.theme.colors.primary};
		padding: 0;
		font-size: 1em;
		text-transform: lowercase;
		font-style: italic;
		cursor: pointer;
	}
`;

export const ProductBottom = styled.div`
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

	span:last-child {
		font-size: 0.9em;
	}
`;

export const ProductPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background-color: ${(props) => props.theme.colors.primary};
		width: 33px;
		height: 33px;
		font-size: 1em;
		border-radius: 50%;
		transition: all 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			box-shadow: ${(props) => props.theme.boxShadows.primary};
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
