import menu from "data/menu.json";
import styles from "./Home.module.scss";

export default function Home() {
	let recommendedDishes = [...menu];
	recommendedDishes = recommendedDishes
		.sort(() => 0.5 - Math.random())
		.splice(0, 3);
	return (
		<section>
			<h3 className={styles.title}>Kitchen recomendations</h3>
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
		</section>
	);
}
