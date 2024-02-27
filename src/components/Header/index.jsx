import React from "react";
import Nav from "../Nav";
import * as S from "./styles";

function Header() {
	return (
		<S.Container>
			<div>ALLMART</div>
			<Nav />
		</S.Container>
	);
}

export default Header;
