import React from "react";
import styles from '../styles/destinations.module.css'
import CardDest2 from "../components/CardDest2";
import dataDestinasi from "../data/Destinasi";
import CardDest from "../components/CardDest";


const Destinations = () => {
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
                    Destinasi
                    </div>
                </div>
            </div>
        
            <div className={styles['container2']}>
                {dataDestinasi.map((data, idx) => {
                    return (
                        <CardDest
                            key={data.id}
                            imageUrl="https://3.bp.blogspot.com/-7AxwcC2EiYc/V8uqwy_3HgI/AAAAAAAAAo4/zEdzymqI4ocgjy6DDrh2f9R7DB5HeCn7QCLcB/s1600/cigangsa.jpg"
                            prov={data.prov.toUpperCase()}
                            kota={data.kota}
                            namaWisata={data.namaWisata}
                            like={data.like}
                        />
                    )
                })}
            </div>
            {/* <div className={styles.container3}>
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
            </div> */}
        </div>
    )
}

export default Destinations;