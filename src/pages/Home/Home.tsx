import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Book from "../../components/Book/Book";
import Galery from "../../components/Galery/Galery";
import Menu from "../../components/Menu/Menu";

function Home() {
	return (
		<>
			<section>
				<Banner />
			</section>
			<section>
				<AboutUs />
			</section>
			<section>
				<Menu />
			</section>
			<section>
				<Galery />
			</section>
			<section>
				<Book />
			</section>
		</>
	);
}

export default Home;
