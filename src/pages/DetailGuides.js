import React, { useState, useEffect } from 'react';
import styles from '../styles/detailGuides.module.css';
import { useLocation, useParams } from 'react-router-dom';
import {HiStar, HiOutlineStar, HiLocationMarker, HiCalendar} from 'react-icons/hi';

import DatePicker from "react-datepicker";
import moment from 'moment'
// import required css from library
import "react-datepicker/dist/react-datepicker.css";
import dataGuides from '../data/Guides';
import { Helmet } from "react-helmet-async";



const DetailGuides = () => {

    useEffect(() => {
        console.log(stateVal)
    })

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null)
    
    const stateVal = useLocation().state.id;


    const handleCheckIndate = (date) => {
        setStartDate(date);
        setEndDate(null);
    }

    const handleCheckOutDate = (date) => {
        setEndDate(date)
    }

    return (
        <>
        <Helmet>
                <title>Destinasi</title>
                <meta name="description" content="Menampilkan detail profil, rating, dan deskripsi tour guide. Pemesanan jasa tour guide juga ditampilkan dengan fitur tanggal booking dan harga dari jasa tersebut. " />
                <link rel="canonical" href="/detail-guide" />
                
            </Helmet> 
        
        <div className={styles.mainBody}>
            <div className={styles.body}>
               
                <div className={styles.columnOneBody}>
                    <div className={styles.imgSampulBody}>
                        <img className={styles.imgSampul} src={require('../assets/background/bg1.jpg')}/>
                    </div>
                    <div classname={styles.rowBody}>
                        <div className={styles.imgBody}>
                            <img className={styles.img} src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png'} />
                        </div>
                        <div className={styles.row}>
                            <div className={styles.rowName}>User</div>
                            <div className={styles.rowWork}>Pemandu Wisata</div>
                        </div>
                        <div className={styles.rowTwo}>
                            <HiStar className={styles.iconStar} />
                            <HiStar className={styles.iconStar} />
                            <HiStar className={styles.iconStar} />
                            <HiStar className={styles.iconStar} />
                            <HiOutlineStar className={styles.iconStar} />
                            <div className={styles.locBody}>
                                <HiLocationMarker className={styles.locIcon} />
                                <div className={styles.locText}>Yogyakarta</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxBody}>
                        <div className={styles.descBody}>
                            <div className={styles.descHeader}
                            >Deskripsi</div>
                            <hr className={styles.hrLine}/>
                            <p className={styles.desc}>
                                Saya adalah pemandu wisata di Daerah Istimewa Yogyakarta
                            </p>
                            
                        </div>
                        <button className={styles.btnBody}>
                            <div className={styles.btnText}>Kirim Pesan</div>
                        </button>
                        
                    </div>
                </div>
                <div className={styles.columnTwoBody}>
                    <div className={styles.boxBody1}>
                        <div className={styles.rowBody2}> 
                            <label className={styles.calenderBody}>
                                
                                <HiCalendar className={styles.iconCal} />
                                <DatePicker
                                selected={startDate}
                                minDate={new Date()}
                                onChange={handleCheckIndate}
                                className={styles.hide}
                                />
                                
                                <div className={styles.calText}>
                                    Mulai
                                </div>
                                {startDate  && (
                                    <div className={styles.calText2}>
                                        {moment(startDate).format('DD-MMM-YY')}
                                    </div>
                                )}
                            </label>
                            <div className={styles.verticalLine}></div>
                            <div className={styles.calenderBody}>
                                <label>
                                <HiCalendar className={styles.iconCal} />
                                <DatePicker
                                    selected={endDate}
                                    minDate={startDate}
                                    onChange={handleCheckOutDate}
                                    className={styles.hide}
                                />
                                </label>
                                <div className={styles.calText}>
                                    Akhir
                                </div>
                                {endDate && (
                                    <div className={styles.calText2}>
                                        {moment(endDate).format('DD-MMM-YY')}
                                    </div>
                                )}
                            </div>
                        </div>
                        <button className={styles.btnOrder}>
                            <div className={styles.btnOrderText}>Pesan Sekarang</div>
                        </button>
                    </div>
                    <div className={styles.boxBody2}>
                        <div className={styles.body2Header}>
                            Rekomendasi lainnya
                        </div>
                        {dataGuides.slice(0,3).map((data, idx) => {
                            return (
                            <div className={styles.cardBody} key={data.id}>
                            <img className={styles.cardImg} src={data.imgProfil} alt={data.alt}/>
                            <div classname={styles.cardColumn}>
                                <div className={styles.cardHeader}>
                                    {data.name}
                                </div>
                                <div className={styles.cardDesc}>
                                    <HiLocationMarker className={styles.locIcon2} />
                                    {data.lokasi}
                                </div>
                                <div classname={styles.cardRowBody}>
                                    {/* <div className={styles.cardText}>
                                        (15 Ulasan)
                                    </div> */}
                                    <div className={styles.starBody}>
                                        <HiStar className={styles.iconStar2} />
                                        <HiStar className={styles.iconStar2} />
                                        <HiStar className={styles.iconStar2} />
                                        <HiStar className={styles.iconStar2} />
                                        <HiStar className={styles.iconStar2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                    </div>
                
                </div>
                
            </div>
            
        </div>
        </>
  )
}

export default DetailGuides