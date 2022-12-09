import React, { useState, useEffect } from 'react';
import styles from '../styles/detailGuides.module.css';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation, Pagination, FreeMode } from "swiper";
import { HiStar, HiOutlineStar, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";
import { getGuideDetail, getGuidesList } from "../actions/guideAction"
import { getWisataList } from "../actions/wisataAction";

import DatePicker from "react-datepicker";
import moment from 'moment'
// import required css from library
import "react-datepicker/dist/react-datepicker.css";

import { Helmet } from "react-helmet-async";
import ModalEx from '../components/Modal';
import CardDest from '../components/CardDest';




const DetailGuides = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null)
    const [smShow, setSmShow] = useState(false);

    const { id } = useParams();

    const handleCheckIndate = (date) => {
        setStartDate(date);
        setEndDate(null);
    }

    const handleCheckOutDate = (date) => {
        setEndDate(date)
    }


    const dispatch = useDispatch();
    const { getGuideDetailResult, getGuidesListResult } =
        useSelector((state) => state.guideReducer)

    const { getWisataListResult, getWisataLoading, getWisataError } =
        useSelector((state) => state.wisataReducer);

    useEffect(() => {
        if (getGuideDetailResult) {
            dispatch(getGuidesList())
        }
        console.log(id)
        dispatch(getGuideDetail(id))
        dispatch(getWisataList())

    }, [getGuideDetailResult, dispatch])



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
                            <img className={styles.imgSampul} src={require('../assets/background/bg1.jpg')} />
                        </div>
                        <div className={styles.rowBody}>
                            <div className={styles.imgBody}>
                                <img className={styles.img} src={getGuideDetailResult ? getGuideDetailResult.imgProfil : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png'} />
                            </div>
                            <div className={styles.row}>
                                <div className={styles.rowName}>{getGuideDetailResult ? getGuideDetailResult.nama : "Unknown User"}</div>
                                <div className={styles.rowWork}>{getGuideDetailResult ? getGuideDetailResult.work : "Unknown User"}</div>
                            </div>
                            <div className={styles.rowTwo}>
                                <HiStar className={styles.iconStar} />
                                <HiStar className={styles.iconStar} />
                                <HiStar className={styles.iconStar} />
                                <HiStar className={styles.iconStar} />
                                <HiOutlineStar className={styles.iconStar} />
                                <div className={styles.locBody}>
                                    <HiLocationMarker className={styles.locIcon} />
                                    <div className={styles.locText}>{getGuideDetailResult ? getGuideDetailResult.lokasi : null}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.boxBody}>
                            <div className={styles.descBody}>
                                <div className={styles.descHeader}
                                >Deskripsi</div>
                                <hr className={styles.hrLine} />
                                <p className={styles.desc}>
                                    {getGuideDetailResult ? getGuideDetailResult.desc : "Unknown User"}
                                </p>

                            </div>
                            <button className={styles.btnBody}>
                                <div className={styles.btnText} onClick={() => setSmShow(true)}>Kirim Pesan</div>
                            </button>

                        </div>
                    </div>
                    <div className={styles.columnTwoBody}>
                        {/* <div className={styles.boxBody1}>
                            <div className={styles.rowBody2}>
                                {getWisataListResult ? (getWisataListResult.map((e) => {
                                    return (
                                        <CardDest
                                            key={e._id}
                                            imageUrl={e.imageBg}
                                            id={e._id}
                                            prov={e.prov}
                                            kota={e.kota}
                                            namaWisata={e.namaWisata}
                                            like={e.like}
                                            alt={e.desc}
                                        />
                                    )
                                })
                                ) : null}
                            </div>

                        </div> */}
                        <div className={styles.boxBody2}>
                            <div className={styles.body2Header}>
                                Rekomendasi lainnya
                            </div>
                            {getGuidesListResult ? (getGuidesListResult.slice(0, 5).map((guide) => {

                                return (
                                    <Link className={styles.cardBody} key={guide._id} to={'/detail-guide/' + guide._id}>
                                        <img className={styles.cardImg} src={guide.imgProfil} alt={guide.alt} />
                                        <div className={styles.cardColumn}>
                                            <div className={styles.cardHeader}>
                                                {guide.nama}
                                            </div>
                                            <div className={styles.cardDesc}>
                                                <HiLocationMarker className={styles.locIcon2} />
                                                {guide.lokasi}
                                            </div>
                                            <div className={styles.cardRowBody}>
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
                                    </Link>
                                )

                            }))
                                : null
                            }
                        </div>

                    </div>

                </div>
                <ModalEx
                    show={smShow}
                    onHide={() => setSmShow(false)}
                />
            </div>
        </>
    )
}

export default DetailGuides