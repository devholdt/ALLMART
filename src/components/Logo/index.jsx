import React from "react";
import logoWhite from "../../assets/logo-white.svg";
import logoBlack from "../../assets/logo-black.svg";
import logoGreen from "../../assets/logo-green.svg";

const logos = {
	white: logoWhite,
	black: logoBlack,
	green: logoGreen,
};

const Logo = ({ color = "white", size = "50px" }) => {
	const logo = logos[color] || logos.white;
	return <img src={logo} alt="Allmart logo" style={{ width: size }} />;
};

export default Logo;
