import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Logo from "../Logo";
import * as S from "./styles";

function Header() {
	return (
		<S.Container>
			<Link to="/">
				<Logo color="green" size="150px" />
			</Link>
			<Nav />
		</S.Container>
	);
}

export default Header;
