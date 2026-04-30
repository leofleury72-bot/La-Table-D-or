import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<header></header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
