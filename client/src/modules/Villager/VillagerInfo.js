import React, { useState, useEffect } from 'react';

import styles from '../module.css/villager.module.css';

function VillagerInfo(props) {
    const { villager, language, villagers } = props;
    const [result, setresult] = useState([]);

    return (
        <div className={styles.infoCard}>
            {villager ?
                <div className={styles.infoBox} style={{background: `${villager['bubble-color']}`, color:`${villager['text-color']}`}}>
                    <img src={villager['image_uri']} alt='pic' className={styles.photo}/>
                    <p className={styles.name}>{villager['name'][`name${language}`]}</p>
                    <p>{villager['species']} | {villager['gender']}</p>
                    <p>
                        <b>Birthday:</b> {villager['birthday-string']}<br/>
                        <b>Hobby:</b> {villager['hobby']}<br/>
                        <b>Catch phrase:</b> {villager['catch-phrase']}<br/>
                        <b>Saying:</b> {villager['saying']}<br/>
                    </p>
                </div>
                : 'click animal for more info'}
        </div>
    );
}

export default VillagerInfo;

