import React from 'react';
import { FaCar } from 'react-icons/fa';
import { HiFolderOpen, HiOutlineLocationMarker, HiOutlineStar, HiOutlineWifi, HiStar } from 'react-icons/hi';
import styles from './styles/cardHotel.module.css'


function CardHotel(props) {
    return (
        <div className={styles.body}>
            <div className={styles.imgBody}>
                <img src={props.imageUrl} className={styles.img} />        
            </div>
            <div className={styles.header}>{props.namaHotel}</div>
            <div className={styles.starBody}>
                <HiStar classname={styles.starIcon} />
                <HiStar classname={styles.starIcon} />
                <HiStar classname={styles.starIcon} />
                <HiStar classname={styles.starIcon} />
                <HiOutlineStar classname={styles.starIcon} />
            </div>
            <div className={styles.secondBody}>
                <div className={styles.row}>
                    <HiOutlineLocationMarker className={styles.iconLoc} />
                    <div className={styles.rowText}>{props.jalan}</div>
                </div>
                <div className={styles.row}>
                    <HiOutlineWifi className={styles.iconLoc} />
                    <div className={styles.rowText}>{props.ket1}</div>
                </div>
                <div className={styles.row}>
                    <HiFolderOpen className={styles.iconLoc} />
                    <div className={styles.rowText}>{props.ket2}</div>
                </div>
                <div className={styles.row}>
                    <FaCar className={styles.iconLoc} />
                    <div className={styles.rowText}>{props.ket3}</div>
                </div>
            </div>
        </div>
      )
    };

export default CardHotel;