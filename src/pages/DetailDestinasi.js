import React from 'react';
import styles from '../styles/detailDestinasi.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation, Pagination, FreeMode } from "swiper";
import dataGuides from '../data/Guides';
import CardDest2 from '../components/CardDest2';
import dataHotel from '../data/Hotel';
import CardHotel from '../components/CardHotel'
import CardKuliner from '../components/CardKuliner';
import dataKuliner from '../data/Kuliner';
import CardGuide2 from '../components/CardGuide2';
import dataDestinasiBali from '../data/DestinasiBali';
import { Helmet } from "react-helmet-async";


const DetailDestinasi = () => {
    const data =
                [
                {
                    id: "1",
                    image: require('../assets/background/bg1.jpg')
                },
                {
                    id: "2",
                    image: require('../assets/background/bg2.jpg')
                },
                {
                    id: "3",
                    image: require('../assets/background/bg3.jpg')
                },
            ]
    return (
        <>
        <Helmet>
                <title>Destinasi</title>
                <meta name="description" content="Rekomendasi destinasi, tour guide, penginapan, dan kuliner disekitar tempat wisata yang dapat membantu anda untuk memilih dan menyeleksi agar agenda berwisata anda sangat menyenangkan." />
                <link rel="canonical" href="/detail-destinasi" />
                
            </Helmet> 
        <div className={styles.mainBody}>
            <div className={styles.bodyColumn1}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    pagination={{
                    clickable: false,
                    }}
                    modules={[Autoplay, EffectFade]}
                    className="mySwiper"
                >
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <img 
                                    src={item.image}
                                    alt=""
                                    className={styles.bgImageBody}
                                />
                                        
                            </SwiperSlide>
                        )
                    })}
                </Swiper>    
                <div className={styles.header1}>
                    BALI
                </div>
            </div>
            <div className={styles.bodyColumn2}>
                <div className={styles.rowBody1}>
                    <div className={styles.rowBody1Header}>Lokasi Wisata</div>
                        <Swiper
                        slidesPerView={3.3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                            {dataDestinasiBali.map((data, index) => {
                            return (
                                <div className={styles.cardBody1}>
                                <SwiperSlide>
                                    <CardDest2
                                    key={data.id}
                                    imageUrl={data.imageBg}
                                    lokasi={data.lokasi}
                                    kota={data.kota}
                                    namaWisata={data.namaWisata}
                                   alt={data.namaWisata}
                                    />
                                </SwiperSlide>
                                </div>
                            )
                        })}
                    </Swiper>    
                </div>
                <div className={styles.rowBody1}>
                    <div className={styles.rowBody1Header}>Rekomendasi Pemandu Wisata</div>
                        <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                            {dataGuides.map((e) => {
                            return (
                                <div className={styles.cardBody1}>
                                <SwiperSlide>
                                    <CardGuide2
                                        key={e.id}
                                        state="tes"
                                        imageUrl={e.imgProfil}
                                        name={e.name}
                                        work={e.work}
                                        alt={e.alt}
                                        desc={e.desc}
                                    />
                                </SwiperSlide>
                                </div>
                            )
                        })}
                    </Swiper>    
                </div>
                <div className={styles.rowBody1}>
                    <div className={styles.rowBody1Header}>Rekomendasi Hotel</div>
                    <div classname={styles.bodySwip}> 
                        <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                            {dataHotel.map((data, index) => {
                            return (
                                <div className={styles.cardBody1}>
                                <SwiperSlide>
                                <CardHotel
                                    key={data.id}
                                    imageUrl={data.imgHotel}
                                    namaHotel={data.namaHotel}
                                    jalan={data.jalan}
                                    ket1="Free Wifi"
                                    ket2="Free Breakfast"
                                    ket3="Free Parking"
                                   
                                    />
                                </SwiperSlide>
                                </div>
                            )
                        })}
                    </Swiper>  
                    </div> 
                     
                </div>
                <div className={styles.rowBody1}>
                    <div className={styles.rowBody1Header}>Rekomendasi Kuliner</div>
                    <div classname={styles.bodySwip}> 
                        <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                            {dataKuliner.map((data, index) => {
                            return (
                                <div className={styles.cardBody1}>
                                <SwiperSlide>
                                    <CardKuliner
                                    key={data.id}
                                    imageUrl={data.imgBg}
                                    namaKuliner={data.namaKuliner}
                                    jalan={data.jalan}
                                    jadwal={data.jadwal}
                                    waktu={data.waktu}
                                    waktu2={data.waktu2}
                                    alt={data.namaKuliner}
                                    />
                                </SwiperSlide>
                                </div>
                            )
                        })}
                    </Swiper>  
                    </div> 
                     
                </div>
            </div>
        </div>
        </>
  )
}

export default DetailDestinasi;