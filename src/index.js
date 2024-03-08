import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import favicon from "./assets/allmart48x48.png";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "./themes/theme";
import "./styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

let link =
	document.querySelector("link[rel~='icon']") || document.createElement("link");
link.type = "image/png";
link.rel = "shortcut icon";
link.href = favicon;
document.getElementsByTagName("head")[0].appendChild(link);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>
);

reportWebVitals();
