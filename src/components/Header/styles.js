import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.black};
	z-index: 100;
`;
