import "./Book.css";
function Book() {
	return (
		<section className="section-text yellow">
			<div className="div-text">
				<h3>Réservation</h3>
				<p>Réservez votre table dès maintenant</p>
			</div>
			<div className="Book_div-info">
				<h3>Informations</h3>
				<ul>
					<li>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Location icon</title>
								<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
								<circle cx="12" cy="10" r="3" />
							</svg>
						</span>
						<div className="book_div-info-text">
							<h4>Adresse</h4>
							<p>15 Rue de la Gastronomie 75008 Paris, France</p>
						</div>
					</li>
					<li>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>phone icon</title>
								<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
							</svg>
						</span>
						<div className="book_div-info-text">
							<h4>Téléphone</h4>
							<p>+33 1 42 56 78 90</p>
						</div>
					</li>
					<li>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>Email logo</title>
								<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
								<rect x="2" y="4" width="20" height="16" rx="2" />
							</svg>
						</span>
						<div className="book_div-info-text">
							<h4>Email</h4>
							<p>contact@latabledor.fr</p>
						</div>
					</li>
					<li>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<title>clock icon</title>
								<circle cx="12" cy="12" r="10" />
								<path d="M12 6v6l4 2" />
							</svg>
						</span>
						<div className="book_div-info-text">
							<h4>Horaires</h4>
							<p>
								Déjeuner: 12h00 - 14h30 <br /> Dîner: 19h00 - 22h30 <br /> Fermé
								le lundi
							</p>
						</div>
					</li>
					<li className="li-note-details">
						<div className="book_div-info-text">
							<h4 className="book-note-details-h4">Note Importante</h4>
							<p className="book-note-details-p">
								Pour les groupes de plus de 8 personnes, veuillez nous contacter
								directement par téléphone. Les réservations peuvent être
								annulées jusqu'à 24h avant.
							</p>
						</div>
					</li>
				</ul>
			</div>
			<form action="submit" className="book-form">
				<p>Nom complet*</p>
				<input type="text" />
				<input type="email" />
				<input type="tel" />
				<div className="book-form-date">
					<input type="date" />
					<input type="time" />
				</div>
				<select name="" id="">
					<option value="2 personne">2 personnes</option>
					<option value="1 personne">1 personne</option>
					<option value="2 personne">2 personnes</option>
					<option value="3 personne">3 personnes</option>
					<option value="4 personne">4 personnes</option>
					<option value="5 personne">5 personnes</option>
					<option value="6 personne">6 personnes</option>
					<option value="7 personne">7 personnes</option>
					<option value="8 personne">8 personnes</option>
				</select>
				<textarea
					name=""
					id=""
					placeholder="Allergies, préférences alimentaires..."
				></textarea>
				<button
					type="submit"
					className="submit-form-btn"
					onClick={() => <div>votre réservation est validée</div>}
				>
					Réserver
				</button>
			</form>
		</section>
	);
}

export default Book;
