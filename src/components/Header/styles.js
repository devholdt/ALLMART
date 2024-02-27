import styled from "styled-components";

export const HeaderElement = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #252525;
	color: #fff;
	box-shadow: 0 0 10px 0 #252525;
	z-index: 100;
`;

export const List = styled.ul`
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
	list-style: none;
	gap: 1rem;
`;

export const Item = styled.li`
	a {
		text-decoration: none;
		color: #fff;
	}
`;
