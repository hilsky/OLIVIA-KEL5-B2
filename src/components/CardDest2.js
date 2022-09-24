import React from 'react';
import styles from './styles/cardDest2.module.css';
import {FaRegHeart} from 'react-icons/fa'
import {HiOutlineLocationMarker} from 'react-icons/hi'


function CardDest2(props) {
    return (
        <div className={styles.cardBody}>
            <div className={styles.imgBody}>
                <img src={props.imageUrl} className={styles.img}/>
            </div>
            <div className={styles.titleBody}>
                <div className={styles.titleProv}>{props.prov}</div>
                <div className={styles.titleBody2}>
                    <HiOutlineLocationMarker className={styles.icon} />
                    <div className={styles.titleLoc}>{props.location}</div>
                </div>
                
            </div>
                {/* <div className={styles.descBody}>
                    <FaRegHeart className={styles.icon} />
                    <div className={styles.like}>
                        {props.like}
                    </div>
                </div> */}
            
            
        </div>
    )
}

export default CardDest2;