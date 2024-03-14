import styled from "styled-components";

export const Container = styled.div`
	margin-left: 0.5em;

	.bm-burger-button {
		position: relative;
		width: 36px;
		height: 30px;
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
		background: ${(props) => props.theme.colors.blackAlt};
		box-shadow: ${(props) => props.theme.boxShadows.white};
		font-size: ${(props) => props.theme.fontSizes.large};
		padding: 2em;
	}

	.bm-item {
		color: ${(props) => props.theme.colors.white};
		text-decoration: none;
		padding: 0.5em;
		margin-bottom: 1em;

		&:hover {
			text-decoration: underline;
		}
	}
`;
