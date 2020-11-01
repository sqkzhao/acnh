import React from 'react';

import styles from '../module.css/villagerInfo.module.css';

function VillagerInfo(props) {
    const { villager, language } = props;

    return (
        <div className={styles.container}>
            {/* FILTER */}
            <div className={styles.card}>
                <p><input className={styles.inputBar} /></p>
                <button className={styles.button}>Species</button>
                <button className={styles.button}>Birthday</button>
                <button className={styles.button}>Personality</button>
                <button className={styles.button}>Hobby</button>
            </div>
            {/* INFO */}
            <div className={styles.card}>
                {villager ?
                    <div className={styles.infoBox} style={{background: `${villager['bubble-color']}`, color:`${villager['text-color']}`}}>
                        <img src={villager['image_uri']} alt='pic' className={styles.photo}/>
                        <p className={styles.name}>{villager['name'][`name${language}`]}</p>
                        <p>{villager['species']} | {villager['gender']}</p>
                        <p>
                            Birthday: {villager['birthday-string']}<br/>
                            Hobby: {villager['hobby']}<br/>
                            Catch phrase: {villager['catch-phrase']}<br/>
                            Saying: {villager['saying']}<br/>
                        </p>
                    </div>
                    : 'click animal for more info'}
            </div>
        </div> 
    );
}

export default VillagerInfo;

