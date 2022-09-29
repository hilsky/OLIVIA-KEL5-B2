import React from 'react';
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineWifi, HiStar } from 'react-icons/hi';
import styles from './styles/cardKuliner.module.css'


function CardKuliner(props) {
  return (
    <div className={styles.body}>
        <div className={styles.imgBody}>
            <img src={props.imageUrl} className={styles.img} />        
        </div>
        <div className={styles.header}>{props.namaKuliner}</div>
        <div className={styles.secondBody}>
            <div className={styles.row}>
                <HiOutlineLocationMarker className={styles.iconLoc} />
                <div className={styles.rowText}>{props.jalan}</div>
            </div>
            <div className={styles.row}>
                <HiOutlineCalendar className={styles.iconLoc} />
                <div className={styles.rowText}>{props.jadwal}</div>
            </div>
            <div className={styles.row}>
                <HiOutlineClock className={styles.iconLoc} />
                <div className={styles.rowText}>{props.waktu} - {props.waktu2}</div>
            </div>
        </div>
    </div>
  )
}

export default CardKuliner;