import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";
import Ordinator from "./Ordinator";
import Itens from "./Itens";

export default function Menu() {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState<number | null>(null);
	const [ordinator, setOrdinator] = useState("");
	return (
		<main>
			<nav className={styles.menu}>
				<Logo />
			</nav>
			<header className={styles.header}>
				<div className={styles.header__text}>
					The house of code and mass
				</div>
			</header>
			<section className={styles.menu}>
				<h3 className={styles.menu__title}>Menu</h3>
				<Search search={search} setSearch={setSearch} />
				<div className={styles.menu__filters}>
					<Filters filter={filter} setFilter={setFilter} />
					<Ordinator
						ordinator={ordinator}
						setOrdinator={setOrdinator}
					/>
				</div>
				<Itens search={search} filter={filter} ordinator={ordinator} />
			</section>
		</main>
	);
}
