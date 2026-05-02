import "./AboutUs.css";
function AboutUs() {
	return (
		<section className="section-text">
			<div className="div-text">
				<article className="AboutUs-article-title">
					<h3>À propos</h3>
					<p>
						Depuis 1995, La Table d'Or propose une cuisine française raffinée
						dans un cadre élégant et chaleureux.
					</p>
				</article>
				<section className="AboutUs_section-article">
					<article className="AboutUs-article">
						<div className="AboutUs-article-img">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#b45309"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Chef logo</title>
								<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
								<path d="M6 17h12" />
							</svg>
						</div>
						<h4>Chef Étoilé </h4>
						<p>
							Notre chef étoilé Michelin crée des plats inspirés de la tradition
							française avec une touche moderne.
						</p>
					</article>
					<article className="AboutUs-article">
						<div className="AboutUs-article-img">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#b45309"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Badge logo</title>
								<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
								<circle cx="12" cy="8" r="6" />
							</svg>
						</div>
						<h4>Excellence</h4>
						<p>
							Récompensés par de nombreux prix gastronomiques pour notre qualité
							et notre service irréprochable.
						</p>
					</article>
					<article className="AboutUs-article">
						<div className="AboutUs-article-img">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#b45309"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Hearth logo</title>
								<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
							</svg>
						</div>
						<h4>Passion</h4>
						<p>
							Chaque plat est préparé avec passion et les meilleurs ingrédients
							locaux de saison.
						</p>
					</article>
				</section>
			</div>
		</section>
	);
}

export default AboutUs;
