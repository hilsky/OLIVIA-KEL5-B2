import React, { useEffect, } from "react";
import styles from '../styles/dashboard.module.css';
import { Swiper, SwiperSlide } from "swiper/react";

import { useDispatch, useSelector } from "react-redux";
import { getGuidesList,  } from "../actions/guideAction";
import { getWisataList,  } from "../actions/wisataAction";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade } from "swiper";

import {FaSistrix} from 'react-icons/fa';
import CardDest from "../components/CardDest";
import CardGuide from "../components/CardGuide";


import Icon1 from '../assets/icon/hotel.png';
import Icon2 from '../assets/icon/destination.png';
import Icon3 from '../assets/icon/tour-guide.png';


import { Helmet } from "react-helmet-async";


const Dashboard  = () => {
            const data =
                [
                {
                    id: "1",
                    image: "https://wallpaperaccess.com/full/3462140.jpg"
                },
                {
                    id: "2",
                    image: "https://wallpaperaccess.com/full/4632386.jpg"
                },
                {
                    id: "3",
                    image: "https://wallpaperaccess.com/full/2189962.jpg"
                },
            ]
        

            const {getGuidesListResult, getGuidesLoading, getGuidesError} =
                useSelector((state) => state.guideReducer);
    
            const {getWisataListResult, getWisataLoading, getWisataError} =
            useSelector((state) => state.wisataReducer);
        
            const dispatch = useDispatch();
        
            useEffect(() => {
                dispatch(getGuidesList())
                dispatch(getWisataList())
            }, [dispatch])

        return (
            <>
                <Helmet>
                    <title>Sabatour</title>
                    <meta name="description" content="Temukan destinasi, Tour guide, rekomendasi penginapan, dan rekomendasi kuliner yang ada di tempat wisata Indonesia." />
                    <link rel="canonical" href="/" />
                    
                </Helmet>
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
                            {getWisataListResult ? (getWisataListResult.slice(0,3).map((e) => {
                            return(
                                <CardDest
                                        key={e._id}
                                        imageUrl={e.imageBg}
                                        id={e._id}
                                        prov={e.prov.toUpperCase()}
                                        kota={e.kota}
                                        namaWisata={e.namaWisata}
                                        like={e.like}
                                        alt={e.desc}
                                    />
                            )
                            })
                            ) : null}
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
                        {getGuidesListResult ? (getGuidesListResult.slice(0,3).map((guide) => {
                         return(
                            <CardGuide
                                key={guide._id}
                                id={guide._id}
                                imageUrl={guide.imgProfil}
                                name={guide.nama}
                                work={guide.work}
                                alt={guide.alt}
                                desc={guide.desc}
                            />
                         )
                    })
                    ) : null}
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
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Dashboard;