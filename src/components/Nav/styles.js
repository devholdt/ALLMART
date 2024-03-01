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
		color: ${(props) => props.theme.colors.white};

		&:hover {
			text-decoration: underline;
		}
	}

	div {
		transition: all 0.2s ease-in-out;

		&:hover {
			box-shadow: ${(props) => props.theme.boxShadows.primary};
		}
	}
`;

export const CartIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.primary};
	width: 36px;
	height: 36px;
	margin-left: 1em;
`;

export const CartCounter = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${(props) => (props.countThresh ? "0.6em" : "0.8em")};
	margin-left: 30px;
	margin-top: 25px;
	position: absolute;
	background-color: ${(props) => props.theme.colors.red};
	color: ${(props) => props.theme.colors.white};
	width: 18px;
	height: 18px;
	border-radius: 50%;
`;
