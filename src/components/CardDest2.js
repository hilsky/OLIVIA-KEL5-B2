import React from 'react';
import styles from './styles/cardDest2.module.css';
import {FaRegHeart} from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';


function CardDest2(props) {
    return (
        <Link className={styles.cardBody} key={props.key} to={{
            pathname:'/detail-destinasi',
            state:props.state
        }}>
            <div className={styles.imgBody}>
                <img src={props.imageUrl} className={styles.img} alt={props.alt}/>
            </div>
            <div className={styles.titleBody}>
                <div className={styles.titleBody2}>
                    <div className={styles.titleNamaWisata}> {props.namaWisata}</div>
                </div>
            </div>
            <div className={styles.starBody}>
                <HiOutlineStar className={styles.starIcon} />
                <HiOutlineStar className={styles.starIcon} />
                <HiOutlineStar className={styles.starIcon} />
                <HiOutlineStar className={styles.starIcon} />
                <HiOutlineStar className={styles.starIcon} />
            </div>
            <div className={styles.locBody}>
                <HiOutlineLocationMarker className={styles.locIcon} />
                <div className={styles.locText}>{props.lokasi}, </div>
                <div className={styles.locText}>{props.kota}</div>
            </div>
        </Link>
    )
}

export default CardDest2;