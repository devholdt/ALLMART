import { useRef, useEffect } from "react";

function DocumentTitle(title, prevailOnUnmount = false) {
	const defaultTitle = useRef("ALLMART | Everything you need");

	useEffect(() => {
		document.title = `ALLMART | ${title}`;
	}, [title]);

	useEffect(
		() => () => {
			if (!prevailOnUnmount) {
				document.title = defaultTitle.current;
			}
		},
		[]
	);
}

export default DocumentTitle;
