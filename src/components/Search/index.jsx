import React, { useState, useEffect } from "react";
import Icon from "../Icon";
import * as S from "./styles";

function Search({ data, setFilteredData }) {
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const results = data.filter((product) =>
			product.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredData(results);
	}, [searchTerm, data, setFilteredData]);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	// useEffect(() => {
	// 	const term = searchTerm.trim().toLowerCase();
	// 	const results = data.filter((product) =>
	// 		product.title.toLowerCase().includes(term)
	// 	);
	// 	setFilteredData(results);
	// }, [searchTerm, data, setFilteredData]);

	return (
		<>
			<S.Container>
				<S.Input
					type="text"
					name="searchInput"
					id="searchInput"
					placeholder="Search..."
					aria-label="Search"
					onChange={handleChange}
				/>
				<S.Button>
					<Icon iconName="search" color="dark" />
				</S.Button>
			</S.Container>
		</>
	);
}

export default Search;
