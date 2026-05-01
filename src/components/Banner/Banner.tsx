import { Link } from "react-router";
import "./Banner.css";
function Banner() {
	return (
		<div className="Hero-banner">
			<h2 id="">La Table d'Or</h2>
			<p>Une expérience culinaire exceptionnelle</p>
			<Link to="/book">Réserver une table</Link>
		</div>
	);
}

export default Banner;
