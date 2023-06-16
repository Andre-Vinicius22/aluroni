import React from 'react';
import filters from './filters.json';
import styles from './Filters.module.scss';
import ClassNames from 'classnames';

interface IOption {
	label: string;
	id: number;
}

interface Props {
	filter: number | null;
	setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {
    function selectFilter(option: IOption) {
        if (filter === option.id) return setFilter(null);
        return setFilter(option.id);
    }

    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button
                    className={ClassNames({
                        [styles.filters__filter]: true,
                        [styles['filters__filter--active']]:
							filter === option.id,
                    })}
                    key={option.id}
                    onClick={() => selectFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
