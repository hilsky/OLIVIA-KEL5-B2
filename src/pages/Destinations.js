import React from "react";
import styles from '../styles/destinations.module.css'
import CardDest2 from "../components/CardDest2";
import dataDestinasi from "../data/Destinasi";
import CardDest from "../components/CardDest";
import { Helmet } from "react-helmet-async";


const Destinations = () => {
    return (
        <>
            <Helmet>
                <title>Destinasi</title>
                <meta name="description" content="Berbagai macam pilihan destinasi wisata diseluruh provinsi di Indonesia, dengan menampilkan jumlah like dari pengunjung wisata tersebut." />
                <link rel="canonical" href="/destinasi" />
            </Helmet>    
            <div className={styles.mainBody}>
                <div className={styles['container']}>
                    <div className={styles.slideOneBody}>
                        <h1 className={styles.slideOneText}>Bangkitkan </h1>
                        <h1 className={styles.slideOneText}>Parisiwata</h1>
                        <h1 className={styles.slideOneText}>Indonesia Maju</h1>
                        <div className={styles.slideOneParagraph}>
                            <p>Tempat wisata adalah tempat yang bisa kita kunjungi saat kita sedang dalam kondisi stres dan butuh waktu luang (refreshing) pada saat ada waktu luang. Seperti yang kita ketahui di Indonesia banyak sekali tempat wisata yang bisa kita kunjungi di mulai dari Sabang sampai Merauke kita bisa menemukan banyak sekali tempat wisata yang ingin kita kunjungi, di mulai dari pegunungan sampai lautan. Kita sebagai masyarakat indonesia sudah sepatutnya bangga terhadap negara kita ini karena disini bisa kita bilang indonesia adalah Surga Pariwisata.</p>
                        </div>
                        <div className={styles.slideOneText2}>
                        Destinasi
                        </div>
                    </div>
                </div>
            
                <div className={styles['container2']}>
                    <div className={styles.cardBody}>
                        {dataDestinasi.map((data, idx) => {
                            return (
                                <CardDest
                                    key={data.id}
                                    imageUrl={data.imageBg}
                                    prov={data.prov.toUpperCase()}
                                    kota={data.kota}
                                    namaWisata={data.namaWisata}
                                    like={data.like}
                                />
                            )
                        })}
                    </div>
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
        </>

    )
}

export default Destinations;