import styles from "./Item.module.scss";
import menu from "../itens.json";
import classNames from "classnames";

type Props = (typeof menu)[0];

export default function Item(props: Props) {
	const { photo, title, description, category, size, serving, price } = props;
	return (
		<div className={styles.item}>
			<div className={styles.item__image}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item__description}>
				<div className={styles.item__title}>
					<h2> {title} </h2>
					<p> {description} </p>
				</div>
				<div className={styles.item__tags}>
					<div
						className={classNames(
							styles.item__type,
							styles[
								`item__type__${category.label.toLowerCase()}`
							]
						)}
					>
						{category.label}
					</div>
					<div className={styles.item__portion}>{size}g</div>
					<div className={styles.item__amtpeople}>
						Dish for {serving} {serving === 1 ? "person" : "people"}
					</div>
					<div className={styles.item__price}>
						R${price.toFixed(2)}
					</div>
				</div>
			</div>
		</div>
	);
}