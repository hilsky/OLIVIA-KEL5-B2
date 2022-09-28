import React from 'react';
import styles from './styles/cardDest.module.css';
import {FaRegHeart} from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi';


function CardDest(props) {
    return (
        <div className={styles.cardBody} key={props.key}>
            <div className={styles.imgBody}>
                <img src={props.imageUrl} className={styles.img} alt={props.alt}/>
            </div>
            <div className={styles.titleBody}>
                <div className={styles.titleBody2}>
                    <div className={styles.titleProv}> {props.prov}</div>
                </div>
                <div className={styles.descBody}>
                    <FaRegHeart className={styles.icon} />
                    <div className={styles.like}>
                        {props.like}
                </div>
            </div>
            </div>
            <div className={styles.locBody}>
                <HiOutlineLocationMarker className={styles.locIcon} />
                <div className={styles.locText}>{props.namaWisata}, </div>
                <div className={styles.locText}>{props.kota}</div>
            </div>
        </div>
    )
}

export default CardDest;