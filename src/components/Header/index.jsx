import React from "react";
import Nav from "../Nav";
import * as S from "./styles";

function Header() {
	return (
		<S.HeaderElement>
			<div>ALLMART</div>
			<Nav />
		</S.HeaderElement>
	);
}

export default Header;
