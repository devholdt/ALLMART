import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";
import * as S from "./styles";

function Search({ data, setFilteredData }) {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const results = data.filter((product) =>
			product.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredData(results);
	}, [searchTerm, data, setFilteredData]);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearch = (event) => {
		if (event.key === "Enter" && searchTerm !== "") {
			const results = data.filter((product) =>
				product.title.toLowerCase().includes(searchTerm.toLowerCase())
			);

			if (results.length > 0) {
				navigate(`/product/${results[0].id}`);
			}
		}
	};

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
					onKeyDown={handleSearch}
				/>
				<S.Button onClick={handleSearch}>
					<Icon iconName="search" color="dark" />
				</S.Button>
			</S.Container>
		</>
	);
}

export default Search;
