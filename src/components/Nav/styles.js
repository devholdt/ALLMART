import styled from "styled-components";

export const List = styled.ul`
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
	list-style: none;
	gap: 1rem;
`;

export const Item = styled.li`
	margin: auto;

	a {
		text-decoration: none;
		color: #fff;
	}
`;

export const CartIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: #c9f66f;
	width: 33px;
	height: 33px;
	margin-left: 1em;
`;

export const CartCounter = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8em;
	margin-left: 30px;
	margin-top: 25px;
	position: absolute;
	background-color: #e94e77;
	color: white;
	width: 16px;
	height: 16px;
	border-radius: 50%;
`;
