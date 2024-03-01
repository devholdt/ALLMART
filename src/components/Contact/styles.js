import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 1em;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: ${(props) => props.theme.boxShadows.white};
	border-radius: 10px;
	max-width: 400px;
`;

export const ContactTitle = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 2px solid ${(props) => props.theme.colors.white};
	padding: 0.5em 0.5em 1em;
	margin-top: 0;
	margin-bottom: 1em;

	h2,
	p {
		margin: 0;
	}

	p {
		color: ${(props) => props.theme.colors.whiteAlt};
	}
`;

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 0 0.5em 0.5em;
	max-width: 100%;

	label {
		margin-bottom: 4px;
	}
`;

export const FormInput = styled.input`
	padding: 0.5em;
	font-size: 1em;
	border: 1px solid #ddd;
	border-radius: 5px;
`;

export const FormTextarea = styled.textarea`
	font-family: inherit;
	padding: 0.5em;
	font-size: 1em;
	border: 1px solid #ddd;
	border-radius: 5px;
	height: 150px;
	resize: none;
`;

export const FormError = styled.p`
	color: ${(props) => props.theme.colors.red};
	margin-top: 4px;
	margin-bottom: 1em;
`;

export const FormSubmit = styled.input`
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.dark};
	border: none;
	border-radius: 5px;
	padding: 0.5em;
	font-size: 1em;
	font-weight: 600;
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: ${(props) => props.theme.boxShadows.primary};
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
