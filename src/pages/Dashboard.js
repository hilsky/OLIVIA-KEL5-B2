import React, { useState, } from "react";
import styles from '../styles/dashboard.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade } from "swiper";

import {FaSistrix} from 'react-icons/fa';
import CardDest from "../components/CardDest";
import CardGuide from "../components/CardGuide";

import Bg1 from '../assets/background/bg1.jpg';
import Icon1 from '../assets/icon/hotel.png';
import Icon2 from '../assets/icon/destination.png';
import Icon3 from '../assets/icon/tour-guide.png';
import dataGuides from "../data/Guides";
import dataDestinasi from "../data/Destinasi";


const Dashboard  = () => {
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
                <div className={styles['container']}>
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
                    <div className={styles.body}>
                    <div className={styles.slideOneBody}>
                            {/* <button className={styles.slideOneButton}>
                                <div className={styles.slideOneText}>CONTINUE READING</div>
                            </button> */}
                    </div>
                    <div className={styles.searchBody}>
                            <input type="text" placeholder="Cari disini" className={styles.searchForm}/>
                            <FaSistrix className={styles.searchIcon}/>
                    </div>
                </div>
                </div>
                <div className={styles['container2']}>
                    <div className={styles.slideTwoBody}>
                        <div className={styles.slideTwoHeader}>
                            Rekomendasi Destinasi
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        {dataDestinasi.slice(0, 3).map((data, idx) => {
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
                    <a className={styles.slideTwoBtnBody} href='/destinasi'>
                        <button className={styles.slideTwoBtn}>LIHAT LAINNYA</button>
                    </a>
                    <div className={styles.slideTwoBody2}>
                        <div className={styles.slideTwoHeader}>
                            Pemandu Wisata
                        </div>
                    </div>
                    <div className={styles.cardBody2}>
                        {dataGuides.slice(0, 3).map((data, idx) => {
                            console.log(data)
                            return (
                                <CardGuide
                                    key={idx}
                                    imageUrl={data.imgProfil}
                                    name={data.name}
                                    work={data.work}
                                    alt={data.alt}
                                    desc={data.desc}
                                />
                            )
                        })}
                    </div>
                    <a className={styles.slideTwoBtnBody2} href='/tour-guide'>
                        <button className={styles.slideTwoBtn2}>LIHAT LAINNYA</button>
                    </a>
                    <div className={styles.slideTwoBody3}>
                        <div className={styles.slideTwoHeader}>Tentang Kami</div>
                        <div className={styles.slideTwoRowBody}>
                            <div className={styles.body3Column1}>
                                <img alt='Gambar Pemandangan' src={require('../assets/background/bg4.png')} className={styles.imgBg} />
                                {/* <div className={styles.layout1}></div>
                                <img className={styles.layout2} src={Bg1}/>
                                <img className={styles.layout3} src={Bg1}/> */}
                            </div>
                            <div className={styles.body3Column2}>
                                <p className={styles.body3Paragraph}>
                                    Sabatour adalah website di Indonesia yang memungkinkan pengguna untuk menemukan dan memesan beragam produk perjalanan, pengguna akan diberikan berbagai pilihan wisata yang mana sudah termasuk hotel terdekat dan kuliner yang ada di sekitar wisata tersebut.  Yang membuat berbeda dari website lain adalah pada website ini kami menampilkan dan menyajikan fitur guide tour dimana pada fitur ini pengguna dapat menemukan para guide tour. Menjadikan Sabatour sebagai platform pemesanan dengan pilihan akomodasi dan paket terlengkap.
                                </p>
                                <div className={styles.body3RowBody}>
                                    <div className={styles.iconBody}>
                                        <img className={styles.icon3} src={Icon3}/>
                                    </div>
                                    <p className={styles.textBody} >
                                    Tour Guide yang berpengalaman dan profesional
                                    </p>
                                </div>
                                <div className={styles.body3RowBody}>
                                    <div className={styles.iconBody}>
                                        <img className={styles.icon3} src={Icon1}/>
                                    </div>
                                    <p className={styles.textBody}>
                                    Rekomendasi hotel yang nyaman dan dekat dengan destinasi wisata
                                    </p>
                                </div>
                                <div className={styles.body3RowBody}>
                                    <div className={styles.iconBody}>
                                        <img className={styles.icon3} src={Icon2}/>
                                    </div>
                                    <p className={styles.textBody}>
                                    Pilihan destinasi yang beragam di seluruh wisata Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slideTwoBtnBody3}>
                        <button className={styles.slideTwoBtn3}>BACA SELENGKAPNYA</button>
                    </div>
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
        )
}

export default Dashboard;