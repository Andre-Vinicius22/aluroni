import menu from 'data/menu.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';
import { Menu } from 'types/Menu';

interface Props {
	search: string;
	filter: number | null;
	ordinator: string;
}

export default function Itens(props: Props) {
    const [list, setList] = useState(menu);
    const { search, filter, ordinator } = props;

    useEffect(() => {
        const hasSearch = (title: string) => {
            const regex = new RegExp(search, 'i');
            return regex.test(title);
        };

        const hasFilter = (id: number) => {
            if (filter !== null) return filter === id;
            return true;
        };

        const ordain = (newList: Menu) => {
            switch (ordinator) {
            case 'portion':
                return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
            case 'Amount_people':
                return newList.sort((a, b) =>
                    a.serving > b.serving ? 1 : -1
                );
            case 'price':
                return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
            default:
                return newList;
            }
        };

        const newList = menu.filter(
            (item) => hasSearch(item.title) && hasFilter(item.category.id)
        );
        setList(ordain(newList));
    }, [search, filter, ordinator]);

    return (
        <div className={styles.itens}>
            {list.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}
