import React, { useState, useEffect } from 'react';

import styles from '../module.css/villagerInfo.module.css';

function VillagerInfo(props) {
    const { villager, language, villagers } = props;
    const [species, setspecies] = useState([]);
    const [result, setresult] = useState([]);

    useEffect(() => {
        let temp = [...species];
        for(const key in villagers){
            if(!temp.includes(villagers[key]['species'])){
                temp.push(villagers[key]['species']);
            }
        }
        setspecies(temp);
        console.log(species)
    }, [])

    const filterHandler = (e) => {
        // const list = villagers.filter(villager => {
        //     villager[e.target.value] 
        // })
        
    }

    return (
        <div className={styles.container}>
            {/* FILTER */}
            <div className={styles.card}>
                {/* <input className={styles.inputBar} /><br/> */}
                <button onClick={filterHandler} value='species' className={styles.filter}>
                    Species
                </button>
                <button className={styles.filter}>
                    Birthday
                </button>
                <button className={styles.filter}>
                    Hobby
                </button>
                <button className={styles.filter}>
                    Personality
                </button>
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

