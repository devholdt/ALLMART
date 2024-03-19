import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.black};
	box-shadow: ${(props) => props.theme.boxShadows.primary};
	border-radius: ${(props) => props.theme.borderRadius.smooth};
	max-width: 400px;
	width: calc(100% - 1em);
	padding: 2em 1em 1em;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid ${(props) => props.theme.colors.black};
	width: 100%;
	padding: 1em 0;

	div {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	svg {
		box-shadow: ${(props) => props.theme.boxShadows.black};
		border-radius: ${(props) => props.theme.borderRadius.round};
	}
`;

export const Items = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	width: 100%;
	padding: 1em 0;
	margin: 0;
	font-size: ${(props) => props.theme.fontSizes.normal};
	line-height: 20px;
	color: ${(props) => props.theme.colors.black};

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		border-bottom: 1px dotted ${(props) => props.theme.colors.black};
	}

	.item h3,
	.item p {
		margin: 0;
		padding: 0;
	}

	.item div {
		display: flex;
		align-self: end;
		gap: 0.5em;
		margin-left: 1em;
	}
`;

export const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: right;
	border-top: 1px solid ${(props) => props.theme.colors.black};
	width: 100%;
	margin: 0;
	padding: 0;

	p {
		font-size: ${(props) => props.theme.fontSizes.large};
	}

	.total-cost {
		font-weight: bold;
	}

	button {
		background-color: ${(props) => props.theme.colors.primaryAlt};
		color: ${(props) => props.theme.colors.dark};
		border: none;
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
		width: 100%;
		padding: 1em;
		transition: all 0.2s ease-in-out;

		&:hover {
			background-color: ${(props) => props.theme.colors.primary};
		}
	}
`;
