import menu from "data/menu.json";
import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import ourHome from "assets/our_home.png";

export default function Home() {
	let recommendedDishes = [...menu];
	recommendedDishes = recommendedDishes
		.sort(() => 0.5 - Math.random())
		.splice(0, 3);
	return (
		<section>
			<h3 className={stylesTheme.title}>Kitchen recomendations</h3>
			<div className={styles.recommended}>
				{recommendedDishes.map((item) => (
					<div key={item.id} className={styles.recomendated}>
						<div className={styles.recomendated__image}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.recomendated__button}>
							See more
						</button>
					</div>
				))}
			</div>
			<h3 className={stylesTheme.title}> Our Home </h3>
			<div className={styles.ourHome}>
				<img src={ourHome} alt="Home of Aluroni" />
				<div className={styles.ourHome__address}>
					Rua do sol, 3000 <br /> <br /> Carmo - PE
				</div>
			</div>
		</section>
	);
}
