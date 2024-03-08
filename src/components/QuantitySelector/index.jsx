import React from "react";
import Icon from "../Icon";
import * as S from "./styles";

function QuantitySelector({ quantity, setQuantity, allowZero = false }) {
	return (
		<S.QuantitySelectorContainer>
			<button
				className="change-quantity"
				onClick={() => setQuantity(Math.max(allowZero ? 0 : 1, quantity - 1))}
			>
				<Icon iconName="remove" color="#E94E77" />
			</button>
			<input
				type="number"
				value={quantity}
				onChange={(e) => {
					const value = parseInt(e.target.value);
					if (value >= (allowZero ? 0 : 1) && value <= 999) {
						setQuantity(value);
					}
				}}
			/>
			<button
				className="change-quantity"
				onClick={() => setQuantity(quantity + 1)}
			>
				<Icon iconName="add" color="#C9F66F" />
			</button>
		</S.QuantitySelectorContainer>
	);
}
export default QuantitySelector;
