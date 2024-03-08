import styled from "styled-components";

export const QuantitySelectorContainer = styled.div`
	display: flex;

	button {
		width: 40px;
		border: none;
		font-size: ${(props) => props.theme.fontSizes.larger};
		background-color: ${(props) => props.theme.colors.dark};
		cursor: pointer;
	}

	input {
		width: 40px;
		text-align: center;
		border: none;
		font-size: ${(props) => props.theme.fontSizes.normal};
		color: ${(props) => props.theme.colors.white};
		background-color: ${(props) => props.theme.colors.blackAlt};

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		&[type="number"] {
			appearance: textfield;
		}

		&:focus {
			outline: none;
		}
	}
`;
