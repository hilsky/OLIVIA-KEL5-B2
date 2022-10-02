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
                        <div className={styles.columnTwoHeader}>Tentang</div>
                    </div>
                    <a className={styles.columnTwoText} href='#'>Blog</a>
                    <a className={styles.columnTwoText} href='#'>Karir</a>
                    <a className={styles.columnTwoText} href='#'>Partner</a>
                    <a className={styles.columnTwoText} href='#'>Perlindungan</a>
                </div>
                <div className={styles.columnTwoBody}>
                    <div className={styles.columnTwoHeaderBody}>
                        <div className={styles.columnTwoHeader}>Produk</div>
                    </div>
                    <a className={styles.columnTwoText} href='#'>Pemandu Wisata</a>
                    <a className={styles.columnTwoText} href='#'>Hotel</a>
                    <a className={styles.columnTwoText} href='#'>Kuliner</a>
                    
                </div>
                <div className={styles.columnTwoBody}>
                    <div className={styles.columnTwoHeaderBody}>
                        <div className={styles.columnTwoHeader}>Dukungan</div>
                    </div>
                    <a className={styles.columnTwoText} href='#'>Pusat Bantuan</a>
                    <a className={styles.columnTwoText} href='#'>Kebijakan Privasi</a>
                    <a className={styles.columnTwoText} href='#'>Syarat & Ketentuan</a>
                    <a className={styles.columnTwoText} href='#'>Daftarkan Hotel Anda</a>
                    
                </div>
                <div className={styles.columnTwoBody}>
                    <div className={styles.columnTwoHeaderBody}>
                        <div className={styles.columnTwoHeader}>Hubungi Kami</div>
                    </div>
                    <div className={styles.rowTwoBody}>
                        <FaPhoneAlt className={styles.iconTwo} />
                        <div className={styles.rowTwoText}>08121212121</div>
                    </div>
                    <div className={styles.rowTwoBody}>
                        <HiMail className={styles.iconTwo} />
                        <div className={styles.rowTwoText}>sabatour@gmail.com</div>
                    </div>
                    <div className={styles.rowTwoBody}>
                        <HiLocationMarker className={styles.iconTwo} />
                        <div className={styles.rowTwoText}>Bogor, Indonesia</div>
                    </div>
                    
                    
                </div>
            </div>
            <div className={styles.belowBody}>
                <div className={styles.socialMediaBody}>
                    <div className={styles.socialHeader}>IKUTI KAMI</div>
                    <FaFacebook className={styles.iconSocialMedia} />
                    <FaInstagramSquare className={styles.iconSocialMedia} />
                    <FaTwitter className={styles.iconSocialMedia} />
                    <FaYoutube className={styles.iconSocialMedia} />

                </div>
                <div className={styles.rowOneBody}>
                    <FaRegCopyright className={styles.iconCopy} />
                    <div className={styles.rowText}>2022, Teknologi Rekayasa Perangkat Lunak, IPB University</div>
                </div>
            </div>
           
        </div>
    )
}

export default Footer;