import { StrictMode } from "react";

import Menu from "./components/Menu/Menu";
import "./index.css";
import Home from "./pages/Home/Home";
import Galery from "./components/Galery/Galery";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import Book from "./components/Book/Book";
import AboutUs from "./components/AboutUs/AboutUs";
import App from "./App";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
				children: [
					{ path: "/galery", element: <Galery /> },
					{ path: "/about-us", element: <AboutUs /> },
					{ path: "/menu", element: <Menu /> },
					{ path: "/book", element: <Book /> },
				],
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
