import React from "react";
import * as S from "./styles";

function Footer() {
	const getYear = () => {
		const date = new Date();
		return date.getFullYear();
	};

	return (
		<S.Container>
			<div>©{getYear()} Allmart</div>
		</S.Container>
	);
}

export default Footer;
