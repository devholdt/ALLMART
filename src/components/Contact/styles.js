import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 1em;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: ${(props) => props.theme.boxShadows.white};
	border-radius: ${(props) => props.theme.borderRadius.smooth};
	max-width: 400px;
`;

export const Title = styled.div`
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

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 0 0.5em 0.5em;
	max-width: 100%;

	label {
		margin-bottom: 4px;
	}
`;

export const Input = styled.input`
	padding: 0.5em;
	font-size: 1em;
	border: 1px solid #ddd;
`;

export const Textarea = styled.textarea`
	font-family: inherit;
	padding: 0.5em;
	font-size: 1em;
	border: 1px solid #ddd;
	height: 150px;
	resize: none;
`;

export const Error = styled.p`
	color: ${(props) => props.theme.colors.red};
	margin-top: 4px;
	margin-bottom: 1em;
`;

export const Submit = styled.input`
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.dark};
	border: none;
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
