import React from 'react';
import styles from './styles/cardGuide.module.css';


function CardGuide(props) {
    return (
        <div className={styles.cardBody}>
            <div className={styles.imgBody}>
                <img src={props.imageUrl} className={styles.img}/>
            </div>
            <div className={styles.titleBody}>
                <div className={styles.titleName}>{props.name}</div>
                <div className={styles.titleWork}>{props.work}</div>
            </div>
            <div className={styles.descBody}>
                <div className={styles.desc}>
                    {props.desc}
                </div>
            </div>
            <div className={styles.mediaSocial}>
                <a href={props.linkWa} className={styles.link}>
                    <img src={props.imgWa} className={styles.icon}/>
                </a>
                <a href={props.linkIg} className={styles.link}>
                    <img src={props.imgIg} className={styles.icon}/>
                </a>
                <a href={props.linkFb} className={styles.link}>
                    <img src={props.imgFb} className={styles.icon}/>
                </a>
            </div>
        </div>
    )
}

export default CardGuide;