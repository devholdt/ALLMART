import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Loader = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 300px;
`;

export const ProductImage = styled.img`
	max-height: 300px;
	max-width: 300px;
	width: 100%;
	object-fit: cover;
`;

export const ProductRating = styled.div`
	display: flex;
	flex-direction: column;
	font-style: italic;

	span:last-child {
		font-size: 0.9em;
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
