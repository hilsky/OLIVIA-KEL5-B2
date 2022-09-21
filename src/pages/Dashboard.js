import React, { useState } from "react";
import styles from '../styles/dashboard.module.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, EffectFade } from "swiper";

import {FaSistrix} from 'react-icons/fa';
import CardDest from "../components/CardDest";
import CardGuide from "../components/CardGuide";

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
            <div>
                <div className={styles['container']}>
                <Swiper
                    
                    effect={"fade"}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
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
                    
                </div>
                <div className={styles.body}>
                    <div className={styles.slideOneBody}>
                            <button className={styles.slideOneButton}>
                                <div className={styles.slideOneText}>CONTINUE READING</div>
                            </button>
                    </div>
                    <div className={styles.searchBody}>
                            <input type="text" placeholder="Search" className={styles.searchForm}/>
                            <FaSistrix className={styles.searchIcon}/>
                    </div>
                </div>
                <div className={styles['container2']}>
                    <div className={styles.slideTwoBody}>
                        <div className={styles.slideTwoHeader}>
                            TOP DESTINATIONS
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <CardDest 
                            imageUrl="https://3.bp.blogspot.com/-7AxwcC2EiYc/V8uqwy_3HgI/AAAAAAAAAo4/zEdzymqI4ocgjy6DDrh2f9R7DB5HeCn7QCLcB/s1600/cigangsa.jpg"
                            city="Sukabumi"
                            prov="Jawa Barat"
                            like="7.1k"
                        />
                        <CardDest 
                            imageUrl="https://borobudurwriters.id/wp-content/uploads/2018/02/Screen-Shot-2018-02-05-at-15.10.00.png"
                            city="Magelang"
                            prov="Jawa Tengah"
                            like="8.1k"
                        />
                        <CardDest 
                            imageUrl="https://3.bp.blogspot.com/-7AxwcC2EiYc/V8uqwy_3HgI/AAAAAAAAAo4/zEdzymqI4ocgjy6DDrh2f9R7DB5HeCn7QCLcB/s1600/cigangsa.jpg"
                            city="Sukabumi"
                            prov="Jawa Barat"
                            like="7.1k"
                        />
                    </div>
                    <div className={styles.slideTwoBtnBody}>
                        <button className={styles.slideTwoBtn}>MORE DESTINATIONS</button>
                    </div>
                    <div className={styles.slideTwoBody2}>
                        <div className={styles.slideTwoHeader}>
                            OUR TOUR GUIDES
                        </div>
                    </div>
                    <div className={styles.cardBody2}>
                        <CardGuide
                            imageUrl='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'
                            name="User"
                            work="Tour Guide"
                            desc="Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
                        />
                        <CardGuide
                            imageUrl='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'
                            name="User"
                            work="Tour Guide"
                            desc="Lorem Ipsum"
                        />
                        <CardGuide
                            imageUrl='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'
                            name="User"
                            work="Tour Guide"
                            desc="Lorem Ipsum"
                        />
                    </div>
                    <div className={styles.slideTwoBtnBody2}>
                        <button className={styles.slideTwoBtn2}>SEE MORE</button>
                    </div>
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

export default Dashboard;