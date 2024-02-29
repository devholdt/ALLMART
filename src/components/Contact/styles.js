import styled from "styled-components";

export const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	width: 80%;
	margin: auto;
`;

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;

	input,
	textarea {
		margin-bottom: 1em;
		padding: 0.5em;
		font-size: 1em;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

	textarea {
		height: 150px;
		resize: none;
	}

	input[type="submit"] {
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.black};
		cursor: pointer;
		border: none;
		border-radius: 5px;
		padding: 0.5em;
		font-size: 1em;
		transition: background-color 0.3s ease;

		&:hover {
			background-color: ${(props) => props.theme.colors.primaryAlt};
		}
	}
`;
