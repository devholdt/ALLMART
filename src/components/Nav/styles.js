import styled from "styled-components";

export const List = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;
	gap: 1rem;

	.menu-sidebar {
		display: none;
	}

	@media (max-width: 768px) {
		.menu-sidebar {
			display: block;
		}

		.menu-item {
			display: none;
		}
	}
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

export const SidebarContainer = styled.div`
	display: none;

	.bm-burger-button {
		position: relative;
		width: 40px;
		height: 36px;

		@media (max-width: 330px) {
			width: 32px;
			height: 32px;
		}
	}

	.bm-burger-bars {
		background: ${(props) => props.theme.colors.white};
	}

	.bm-burger-bars-hover {
		background: ${(props) => props.theme.colors.primary};
	}

	.bm-cross {
		background: ${(props) => props.theme.colors.white};
	}

	.bm-menu-wrap {
		position: fixed;
		top: 0;
	}

	.bm-menu {
		background: ${(props) => props.theme.colors.black};
		font-size: ${(props) => props.theme.fontSizes.large};
		padding: 5em 0 0;

		display: flex;
		justify-content: center;
		text-align: center;
	}

	.bm-item {
		padding: 0.5em;
		margin-bottom: 1em;
	}

	@media (max-width: 768px) {
		display: block;
	}
`;

export const CartIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${(props) => props.theme.borderRadius.round};
	background-color: ${(props) => props.theme.colors.primary};
	width: 36px;
	height: 36px;
	margin-left: 1em;

	@media (max-width: 768px) {
		margin-left: 0.5em;
	}
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
	border-radius: ${(props) => props.theme.borderRadius.round};
`;
