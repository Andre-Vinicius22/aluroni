import React from "react";
import styles from "./DefaultPage.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import { Outlet } from "react-router-dom";

export default function DefaultPage({
	children,
}: {
	children?: React.ReactNode;
}) {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
					The house of code and mass
				</div>
			</header>
			<div className={stylesTheme.container}>
				<Outlet />
				{children}
			</div>
		</>
	);
}
