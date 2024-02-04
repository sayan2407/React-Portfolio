import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import React from 'react'

const root = document.getElementById("root");

createRoot(root).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// root.render(
// 	<React.StrictMode>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</React.StrictMode>
// );

reportWebVitals();
