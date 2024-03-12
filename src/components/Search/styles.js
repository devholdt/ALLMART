import styled from "styled-components";

export const Loader = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const Container = styled.div`
	display: flex;
	margin-bottom: 1.5em;
	gap: 0.25em;
`;

export const Input = styled.input`
	border: 1px solid ${({ theme }) => theme.colors.blackAlt};
	border-radius: 25px;
	padding-left: 20px;
	font-size: 1em;
	width: 100%;

	&:focus {
		outline: none;
	}
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1em;
	height: 40px;
	width: 40px;
	border: none;
	border-radius: 25px;
	background-color: ${({ theme }) => theme.colors.primaryAlt};
	color: ${({ theme }) => theme.colors.dark};
	font-weight: bold;
	transition: 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		box-shadow: ${({ theme }) => theme.boxShadows.primary};
	}
`;
