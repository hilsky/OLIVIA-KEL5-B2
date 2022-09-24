import React from 'react';
import styles from './styles/footer.module.css';
import {FaPhoneAlt, FaRegCopyright, FaInstagramSquare, FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa';
import {HiMail, HiLocationMarker} from 'react-icons/hi'


function Footer() {

    return (
        <div className={styles.container}>
            <div className={styles.columnBody}>
                <div className={styles.columnOneBody}>
                    <h1 className={styles.columnOneText}>SABA</h1>
                    <h1 className={styles.columnOneText}>TOUR.</h1>
                </div>
                <div className={styles.columnTwoBody}>
                    <div className={styles.columnTwoHeaderBody}>
                        <HiLocationMarker className={styles.icon} />
                        <div className={styles.columnTwoHeader}>Visit Us</div>
                    </div>
                    <a className={styles.columnTwoText} href='/#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </a>
                </div>
                <div className={styles.columnTwoBody}>
                    <div className={styles.columnTwoHeaderBody}>
                        <FaPhoneAlt className={styles.icon} />
                        <div className={styles.columnTwoHeader}>Call Us</div>
                    </div>
                    <a className={styles.columnTwoText} href='/#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </a>
                </div>
                <div className={styles.columnTwoBody}>
                    <div className={styles.columnTwoHeaderBody}>
                        <HiMail className={styles.icon} />
                        <div className={styles.columnTwoHeader}>Email Us</div>
                    </div>
                    <a className={styles.columnTwoText} href='/#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </a>
                </div>
            </div>
            <div className={styles.belowBody}>
                <div className={styles.rowOneBody}>
                    <FaRegCopyright className={styles.iconCopy} />
                    <div className={styles.rowText}>2022, Teknologi Rekayasa Perangkat Lunak, IPB University</div>
                </div>
                <div className={styles.socialMediaBody}>
                    <FaFacebook className={styles.iconSocialMedia} />
                    <FaInstagramSquare className={styles.iconSocialMedia} />
                    <FaTwitter className={styles.iconSocialMedia} />
                    <FaYoutube className={styles.iconSocialMedia} />

                </div>
            </div>
           
        </div>
    )
}

export default Footer;