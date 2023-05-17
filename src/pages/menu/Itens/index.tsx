import menu from "data/menu.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface Props {
	search: string;
	filter: number | null;
	ordinator: string;
}

export default function Itens(props: Props) {
	const [list, setList] = useState(menu);
	const { search, filter, ordinator } = props;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const hasSearch = (title: string) => {
		const regex = new RegExp(search, "i");
		return regex.test(title);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const hasFilter = (id: number) => {
		if (filter !== null) return filter === id;
		return true;
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const ordain = (newList: typeof menu) => {
		switch (ordinator) {
			case "portion":
				return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
			case "Amount_people":
				return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
			case "price":
				return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
			default:
				return newList;
		}
	};

	useEffect(() => {
		const newList = menu.filter(
			(item) => hasSearch(item.title) && hasFilter(item.category.id)
		);
		setList(ordain(newList));
	}, [search, filter, ordinator, ordain, hasSearch, hasFilter]);

	return (
		<div className={styles.itens}>
			{list.map((item) => (
				<div>
					<Item key={item.id} {...item} />
				</div>
			))}
		</div>
	);
}
