import styled from "styled-components";

export const Container = styled.footer`
	padding: 1rem;
	z-index: 100;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.black};
	flex-shrink: 0;
	margin-top: 1em;
`;
