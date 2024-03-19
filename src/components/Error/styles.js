import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	box-shadow: ${(props) => props.theme.boxShadows.white};
	max-width: 520px;

	.errorButtons {
		display: flex;
		justify-content: center;
		gap: 1em;
		margin: 1em;
	}

	button {
		display: flex;
		gap: 0.5em;
		text-transform: uppercase;
		font-weight: 600;
		padding: 0.5em 1em;
		color: ${(props) => props.theme.colors.white};
		background-color: ${(props) => props.theme.colors.dark};
		border: 1px solid ${(props) => props.theme.colors.darkAlt};
		box-shadow: ${(props) => props.theme.boxShadows.black};
		cursor: pointer;

		&:hover {
			background-color: ${(props) => props.theme.colors.darkAlt};
		}
	}

	a {
		color: ${(props) => props.theme.colors.black};
		font-weight: bold;

		&:hover {
			color: ${(props) => props.theme.colors.blackAlt};
		}
	}
`;

export const ErrorMessage = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.colors.red};
	color: ${(props) => props.theme.colors.black};
	display: flex;
	flex-wrap: wrap;

	p {
		display: flex;
		align-items: center;
		gap: 0.5em;
		padding: 0 1em;
		font-size: ${(props) => props.theme.fontSizes.large};
	}
`;

export const ErrorContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2em;
	color: ${(props) => props.theme.colors.black};
	background-color: ${(props) => props.theme.colors.white};
	text-align: center;

	span {
		margin-top: 0.5em;
		font-style: italic;
	}
`;
