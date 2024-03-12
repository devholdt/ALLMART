import React from "react";
import Icon from "../Icon";
import * as S from "./styles";

function Search() {
	return (
		<S.Container>
			<S.Input
				type="text"
				name="searchInput"
				id="searchInput"
				placeholder="Search..."
				aria-label="Search"
			/>
			<S.Button>
				<Icon iconName="search" color="dark" />
			</S.Button>
		</S.Container>
	);
}

export default Search;
