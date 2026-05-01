import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import App from "./App";
import AboutUs from "./pages/AboutUs/AboutUs";
import Galery from "./pages/Galery/Galery";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Book from "./components/Book/Book";

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
