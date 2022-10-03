import React from 'react';
import styles from './styles/cardGuide2.module.css';
import {Link} from 'react-router-dom'


function CardGuide2(props) {
    return (
        <div className={styles.cardBody} >
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
        <Link className={styles.btnBody} to={'/detail-guide/'+props.id}>
            <div className={styles.btnText}>SELENGKAPNYA</div>
        </Link>
    </div>

    )
}

export default CardGuide2;