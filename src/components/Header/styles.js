import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
	z-index: 100;
`;
