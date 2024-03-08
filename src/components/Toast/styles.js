import styled from "styled-components";
import { ToastContainer } from "react-toastify";

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
