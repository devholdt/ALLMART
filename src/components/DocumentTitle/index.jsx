import { useRef, useEffect } from "react";

function DocumentTitle(title, prevailOnUnmount = false) {
	const defaultTitle = useRef("ALLMART");

	useEffect(() => {
		document.title = `${title} - ALLMART`;
	}, [title]);

	useEffect(
		() => () => {
			if (!prevailOnUnmount) {
				document.title = defaultTitle.current;
			}
		},
		[prevailOnUnmount]
	);
}

export default DocumentTitle;
