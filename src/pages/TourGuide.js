import React from "react";
import styles from '../styles/tourguide.module.css';
import {FaTimes} from 'react-icons/fa';
import CardGuide from "../components/CardGuide";
import Logo from '../assets/logo/logo.png'


const TourGuide = () => {
    return (
        <div className={styles.mainBody}>
            <div className={styles['container']}>
                <div className={styles.slideOneBody}>
                    <h1 className={styles.slideOneText}>Bangkitkan </h1>
                    <h1 className={styles.slideOneText}>Parisiwata</h1>
                    <h1 className={styles.slideOneText}>Indonesia Maju</h1>
                    <div className={styles.slideOneParagraph}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className={styles.slideOneText2}>
                        Our Tour Guides
                    </div>
                </div>
            </div>
        
            <div className={styles['container2']}>
                <CardGuide
                    imageUrl='https://cdn-cas.orami.co.id/parenting/images/pahlawan_soekarno.width-800.jpegquality-80.jpg'
                    name="Hilmi"
                    work="Tour Guide"
                    desc="Lorem Ipsum"
                />
                <CardGuide
                    imageUrl='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'
                    name="Hilmi"
                    work="Tour Guide"
                    desc="Lorem Ipsum"
                />
                <CardGuide
                    imageUrl='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'
                    name="Hilmi"
                    work="Tour Guide"
                    desc="Lorem Ipsum "
                />
                <CardGuide
                    imageUrl='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'
                    name="Hilmi"
                    work="Tour Guide"
                    desc="Lorem Ipsum"
                />
                <CardGuide
                    imageUrl='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'
                    name="Hilmi"
                    work="Tour Guide"
                    desc="Lorem Ipsum"
                />
                <CardGuide
                    imageUrl='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'
                    name="Hilmi"
                    work="Tour Guide"
                    desc="Lorem Ipsum"
                />
            </div>
            <div className={styles.container3}>
                <div className={styles.slideThreeBody}>
                    <div>
                        <h1 className={styles.slideThreeText}>JADILAH</h1>
                        <h1 className={styles.slideThreeText}>BAGIAN DARI</h1>
                        <h1 className={styles.slideThreeText}>TIM KAMI.</h1>
                    </div>
                    <div className={styles.slideThreeParagraph}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TourGuide;