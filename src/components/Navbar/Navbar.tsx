import { useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";

function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	return (
		<nav className="navBar">
			<h1 className="navBar-title">La Table d'Or</h1>
			{isOpen ? (
				<button type="button" onClick={() => setIsOpen(false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="navBar_Burger-menu"
					>
						<title>Burger Menu</title>
						<path d="M4 5h16" />
						<path d="M4 12h16" />
						<path d="M4 19h16" />
					</svg>
				</button>
			) : (
				<button type="button" onClick={() => setIsOpen(true)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="navBar_Burger-menu"
					>
						<title>Burger Menu close</title>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
					<ul className="ul_navBar-links">
						<li className="li_navBar-links">
							<Link className="navBar-links" to="/">
								Accueil
							</Link>
						</li>
						<li className="li_navBar-links">
							<Link className="navBar-links" to="/galery">
								Galerie
							</Link>
						</li>
						<li className="li_navBar-links">
							<Link className="navBar-links" to="/about-us">
								A propos
							</Link>
						</li>
						<li className="li_navBar-links">
							<Link className="navBar-links" to="/menu">
								Menu
							</Link>
						</li>
						<li className="li_navBar-links-book">
							<Link className="navBar-links-book" to="/book">
								Réserver
							</Link>
						</li>
					</ul>
				</button>
			)}
		</nav>
	);
}

export default Navbar;
