import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchVillagerData } from '../../actions';
import VillagerCard from './VillagerCard';
import VillagerController from './VillagerController';
import VillagerInfo from './VillagerInfo';

import styles from '../module.css/villager.module.css';

function VilaggerList(props) {
    const { fetchVillagerData, villagers, species } = props;
    const [selectedVillager, setselectedVillager] = useState(null);
    const [language, setlanguage] = useState('-USen');

    useEffect(() => {
        fetchVillagerData();
    }, []);

    const clickVillager = (e) => {
        console.log(e.target)
        setselectedVillager(villagers[e.target.value]);
    }

    return (
        <div>
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
            <div className={styles.container}>
                <VillagerController />
                <VillagerInfo 
                    villager={selectedVillager} 
                    language={language} 
                    villagers={villagers} 
                    className={styles.infoContianer}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { villagers: state.villagers };
}

export default connect(mapStateToProps, { fetchVillagerData })(VilaggerList);
