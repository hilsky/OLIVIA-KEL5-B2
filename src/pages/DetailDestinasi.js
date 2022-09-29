import React from 'react';
import styles from '../styles/detailDestinasi.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation, Pagination, FreeMode } from "swiper";
import dataDestinasi from '../data/Destinasi';
import CardDest from '../components/CardDest';
import dataGuides from '../data/Guides';
import CardGuide from '../components/CardGuide';
import CardDest2 from '../components/CardDest2';
import dataHotel from '../data/Hotel';
import CardHotel from '../components/CardHotel'
import CardKuliner from '../components/CardKuliner';
import dataKuliner from '../data/Kuliner';


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
                            {dataDestinasi.map((data, index) => {
                            return (
                                <div className={styles.cardBody1}>
                                <SwiperSlide>
                                    <CardDest2
                                    key={data.id}
                                    imageUrl="https://3.bp.blogspot.com/-7AxwcC2EiYc/V8uqwy_3HgI/AAAAAAAAAo4/zEdzymqI4ocgjy6DDrh2f9R7DB5HeCn7QCLcB/s1600/cigangsa.jpg"
                                    lokasi={data.lokasi}
                                    kota={data.kota}
                                    namaWisata={data.namaWisata}
                                   
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
                                    <CardGuide
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
                                    imageUrl="https://3.bp.blogspot.com/-7AxwcC2EiYc/V8uqwy_3HgI/AAAAAAAAAo4/zEdzymqI4ocgjy6DDrh2f9R7DB5HeCn7QCLcB/s1600/cigangsa.jpg"
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
                                    imageUrl="https://3.bp.blogspot.com/-7AxwcC2EiYc/V8uqwy_3HgI/AAAAAAAAAo4/zEdzymqI4ocgjy6DDrh2f9R7DB5HeCn7QCLcB/s1600/cigangsa.jpg"
                                    namaKuliner={data.namaKuliner}
                                    jalan={data.jalan}
                                    jadwal={data.jadwal}
                                    waktu={data.waktu}
                                    waktu2={data.waktu2}
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
  )
}

export default DetailDestinasi;