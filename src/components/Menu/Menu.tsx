import "./Menu.css";
function Menu() {
	return (
		<section className="section-text-Menu">
			<div className="div-text">
				<h3>Notre Menu</h3>
				<p>Découvrez notre sélection de plats raffinés</p>
			</div>
			<div className="div-img-Menu">
				<img
					src="https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
					alt=""
				/>

				<img
					src="https://images.unsplash.com/photo-1755811248299-7a6867dc163d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
					alt=""
				/>
			</div>
			<section className="section_article-Menu">
				<article className="article-Menu">
					<h3>Entrées</h3>
					<ul>
						<li>
							<div className="div-title-price">
								<h4>Foie Gras Maison</h4>
								<span>24€</span>
							</div>
							<p>Servi avec chutney de figues et pain brioché</p>
						</li>
						<li>
							<div className="div-title-price">
								<h4>Carpaccio de Saint-Jacques</h4>
								<span>28€</span>
							</div>
							<p>Huile de truffe et citron vert</p>
						</li>
						<li>
							<div className="div-title-price">
								<h4>Soupe à l'Oignon Gratinée</h4>
								<span>16€</span>
							</div>
							<p>Recette traditionnelle, gruyère fondu</p>
						</li>
					</ul>
				</article>
				<article className="article-Menu">
					<h3>Plats Principaux</h3>
					<ul>
						<li>
							<div className="div-title-price">
								<h4>Filet de Bœuf Rossini</h4>
								<span>48€</span>
							</div>
							<p>Foie gras poêlé, sauce périgueux</p>
						</li>
						<li>
							<div className="div-title-price">
								<h4>Turbot Rôti</h4>
								<span>42€</span>
							</div>
							<p>Purée de céleri, beurre blanc aux agrumest</p>
						</li>
						<li>
							<div className="div-title-price">
								<h4>Magret de Canard</h4>
								<span>38€</span>
							</div>
							<p>Sauce aux cerises, gratin dauphinois</p>
						</li>
					</ul>
				</article>
				<article className="article-Menu">
					<h3>Desserts</h3>
					<ul>
						<li>
							<div className="div-title-price">
								<h4>Tarte Tatin</h4>
								<span>14€</span>
							</div>
							<p>Pommes caramélisées, glace vanille</p>
						</li>
						<li>
							<div className="div-title-price">
								<h4>Millefeuille</h4>
								<span>16€</span>
							</div>
							<p>Crème pâtissière vanille de Madagascar</p>
						</li>
						<li>
							<div className="div-title-price">
								<h4>Soufflé au Chocolat</h4>
								<span>18€</span>
							</div>
							<p>Cœur coulant, glace chocolat noir</p>
						</li>
					</ul>
				</article>
			</section>
		</section>
	);
}

export default Menu;
