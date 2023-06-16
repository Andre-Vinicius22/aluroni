import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Ordinator from './Ordinator';
import Itens from './Itens';

export default function Menu() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [ordinator, setOrdinator] = useState('');

    return (
        <section className={styles.menu}>
            <h3 className={stylesTheme.title}>Menu</h3>
            <Search search={search} setSearch={setSearch} />
            <div className={styles.menu__filters}>
                <Filters filter={filter} setFilter={setFilter} />
                <Ordinator ordinator={ordinator} setOrdinator={setOrdinator} />
            </div>
            <Itens search={search} filter={filter} ordinator={ordinator} />
        </section>
    );
}
