import React from 'react';
import styles from './styles/cardDest.module.css';
import {FaRegHeart} from 'react-icons/fa'


function CardDest(props) {
    return (
        <div className={styles.cardBody}>
            <div className={styles.imgBody}>
                <img src={props.imageUrl} className={styles.img}/>
            </div>
            <div className={styles.titleBody}>
                <div className={styles.titleBody2}>
                    <div className={styles.titleCity}>{props.city},</div>
                    <div className={styles.titleProv}> {props.prov}</div>
                </div>
                <div className={styles.descBody}>
                    <FaRegHeart className={styles.icon} />
                    <div className={styles.like}>
                        {props.like}
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default CardDest;