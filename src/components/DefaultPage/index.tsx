import styles from "./DefaultPage.module.scss";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
					The house of code and mass
				</div>
			</header>
			<div>
				<Outlet />
			</div>
		</>
	);
}
