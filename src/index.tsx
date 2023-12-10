import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import router from "./router";
import GlobalStyle from "./styles/GlobalStyels";
import GlobalFont from "./styles/GlobalFont";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<RecoilRoot>
		<ThemeProvider
			theme={{
				primary: "#349348",
				textPrimary: "#4A4A4A",
				titlePrimary: "#1F1F1F",
				titleSecondary: "#777777",
				subtitle: "#999999",
			}}
		>
			<GlobalFont />
			<GlobalStyle />

			<RouterProvider router={router} />
		</ThemeProvider>
	</RecoilRoot>,
);
