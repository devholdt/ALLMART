import { useState, useEffect } from "react";

export function useApi(url) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function getData() {
			try {
				setIsLoading(true);
				setError(null);

				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const json = await response.json();

				setData(json.data);
			} catch (error) {
				console.error(error);

				setError(error.message || "An unknown error occurred");
			} finally {
				setIsLoading(false);
			}
		}

		getData();
	}, [url]);

	return { data, isLoading, error };
}
