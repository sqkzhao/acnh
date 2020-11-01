import React, { useState, useEffect } from 'react';
import acnh from '../../apis/acnh';
import VillagerCard from './VillagerCard';
import VillagerInfo from './VillagerInfo';

import styles from '../module.css/villagerList.module.css';

function VilaggerList() {
    const [villagers, setvillagers] = useState([]);   // dictionary
    const [selectedVillager, setselectedVillager] = useState(null);
    const [language, setlanguage] = useState('-USen');

    useEffect(() => {
        getVillagers();
    }, []);

    const getVillagers = async () => {
        const response = await acnh.get('/villagers');
        setvillagers(response.data);
    };

    const clickVillager = (e) => {
        setselectedVillager(villagers[e.target.value]);
    }

    return (
        <div className={styles.container}>
            {/* <select name="species" id="species">
                <option>Species</option>
                {species.map((specie, i) => {
                    return (
                        <option key={i} value={specie}>
                            {specie}
                        </option>
                )})}
            </select> */}
            <div className={styles.cardContainer}>
                {villagers.slice(100, 120).map((villager) => {
                    let name = villager['name'][`name${language}`];
                    return (
                        <VillagerCard 
                            key={villager['id']} 
                            id={villager['id'] - 1} 
                            icon_url={villager['icon_uri']} 
                            name={name}
                            clickVillager={clickVillager}
                        />
                    )
                })}
            </div>
            <VillagerInfo 
                villager={selectedVillager} 
                language={language} 
                villagers={villagers} 
                className={styles.infoContianer}
            />
        </div>
    );
}

export default VilaggerList;
