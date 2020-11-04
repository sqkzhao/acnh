import React from 'react'
import styles from '../module.css/villager.module.css';

function VillagerController(props) {
    return (
        <div className={styles.infoCard}>
            {/* <input className={styles.inputBar} /><br/> */}
            <button value='species' className={styles.filter}>
                <b>Species</b>
            </button>
            <button className={styles.filter}>
                <b>Birthday</b>
            </button>
            <button className={styles.filter}>
                <b>Hobby</b>
            </button>
            <button className={styles.filter}>
                <b>Personality</b>
            </button>
        </div>
    )
}

export default VillagerController

