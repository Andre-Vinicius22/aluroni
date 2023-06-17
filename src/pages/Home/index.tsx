import menu from "data/menu.json";
import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import ourHome from "assets/our_home.png";
import { useNavigate } from "react-router-dom";
import { Dish } from "types/Menu";

export default function Home() {
	let recommendedDishes = [...menu];
	recommendedDishes = recommendedDishes
		.sort(() => 0.5 - Math.random())
		.splice(0, 3);

	const navigate = useNavigate();

	function RedirectToDetails(dish: Dish) {
		navigate(`/dish/${dish.id}`, { state: { dish }, replace: true });
	}

	return (
		<section>
			<h3 className={stylesTheme.title}>Kitchen recomendations</h3>
			<div className={styles.recommended}>
				{recommendedDishes.map((item) => (
					<div key={item.id} className={styles.recomendated}>
						<div className={styles.recomendated__image}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button
							className={styles.recomendated__button}
							onClick={() => RedirectToDetails(item)}
						>
							See more
						</button>
					</div>
				))}
			</div>
			<div className={styles.ourHome}>
				<h3 className={stylesTheme.title}> Our Home </h3>
				<img src={ourHome} alt="Home of Aluroni" />
				<div className={styles.ourHome__address}>
					Rua do sol, 3000 <br /> <br /> Carmo - PE
				</div>
			</div>
		</section>
	);
}
