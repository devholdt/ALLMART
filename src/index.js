import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "./themes/theme";
import "./styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
