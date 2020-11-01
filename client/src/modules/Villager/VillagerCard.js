import React from 'react';
import styles from '../module.css/villagerCard.module.css';
// import { selectVillager } from '../../actions';

function VillagerCard(props) {
    const { id, icon_url, name, clickVillager } = props;

    return (
        <button className={styles.card} value={id} onClick={clickVillager}>
            <button 
                className={styles.imgbox} 
                value={id} 
                onClick={clickVillager}
                style={{backgroundImage:`url(${icon_url})`}}
            >
            </button>
            <h6>{name}</h6>
        </button>
    );
}

export default VillagerCard;

