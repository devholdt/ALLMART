import React from "react";
import styled from "styled-components";

const FooterElement = styled.footer`
	padding: 1rem;
	z-index: 100;
	color: #fff;
	background-color: #252525;
	box-shadow: 0 0 10px 0 #252525;
	flex-shrink: 0;
`;

function Footer() {
	return (
		<FooterElement>
			<div>©2024 Allmart</div>
		</FooterElement>
	);
}

export default Footer;
