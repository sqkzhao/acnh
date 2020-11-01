import React from 'react';
import VillagerList from './Villager/VilaggerList';

import styles from './module.css/library.module.css';

const Library = () => {

    return (
        <div className={styles.container}>
            <VillagerList />
        </div>
    );
}

export default Library;
