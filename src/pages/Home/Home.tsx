import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
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
		</>
	);
}

export default Home;
