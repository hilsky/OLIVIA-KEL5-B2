import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/search.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getGuidesList,  } from "../actions/guideAction";
import { getWisataList,  } from "../actions/wisataAction";

import CardDest2 from '../components/CardDest2';
import CardGuide2 from '../components/CardGuide2';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, FreeMode } from "swiper";


const Search = () => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);

    const {state} = useLocation();

    const {getGuidesListResult, getGuidesLoading, getGuidesError} =
    useSelector((state) => state.guideReducer);

    const {getWisataListResult, getWisataLoading, getWisataError} =
    useSelector((state) => state.wisataReducer);

    const filterWisata =  getWisataListResult ? getWisataListResult.filter((data) => (data.namaWisata.toLowerCase() === state) || (data.prov.toLowerCase() === state) || (data.kota.toLowerCase() === state) || (data.namaWisata === state) || (data.prov === state) || (data.kota === state)) : "Tidak ada data"

    const filterGuide =  getGuidesListResult ? getGuidesListResult.filter((data) => (data.nama.toLowerCase() === state) || (data.work.toLowerCase() === state) || (data.lokasi.toLowerCase() === state) || (data.nama === state) || (data.work === state) || (data.lokasi === state)) : "Tidak ada data"

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGuidesList())
        dispatch(getWisataList())
    }, [dispatch])
  return ( 
    <div className={styles.body}>
       <h2 className={styles.header}>Hasil pencarian: {state}</h2>
       <div className={styles.secondBody}>
            <h2 className={styles.header}>Destinasi</h2>
            <Swiper
                 breakpoints={{
                            
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 2.5,
                        
                        spaceBetween: 15
                    },
                    640: {
                        slidesPerView: 2.5,
                        
                        spaceBetween: 20
                    },
                    540: {
                        slidesPerView:2,
                        
                        spaceBetween: 20
                    },
                    400: {
                        slidesPerView:1.5,
                        centeredSlides: true,
                        spaceBetween: 20
                    },
                    360: {
                        slidesPerView:1.5,
                        centeredSlides: true,
                        spaceBetween: 20
                    },
                    300: {
                        slidesPerView:1.3,
                        centeredSlides: true,
                        spaceBetween: 20
                    },
                    
                    
                }}
                
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                {filterWisata !== null ? filterWisata.map((e) => {
                            return (
                                    <div className={styles.cardBody}>
                                        <SwiperSlide>
                                        <CardDest2
                                            key={e._id}
                                            imageUrl={e.imageBg}
                                            id={e._id}
                                            prov={e.prov.toUpperCase()}
                                            kota={e.kota}
                                            namaWisata={e.namaWisata}
                                            like={e.like}
                                            alt={e.desc}
                                        />
                                        </SwiperSlide>
                                    </div>
                            )
                        }) : <div className={styles.error}>Tidak ada data</div>
                    }
            </Swiper>
        </div>
        <div className={styles.secondBody}>
            <h2 className={styles.header}>Pemandu Wisata</h2>
            <Swiper
                 breakpoints={{
                            
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 2.5,
                        
                        spaceBetween: 15
                    },
                    640: {
                        slidesPerView: 2.5,
                        
                        spaceBetween: 20
                    },
                    540: {
                        slidesPerView:2,
                        
                        spaceBetween: 20
                    },
                    400: {
                        slidesPerView:1.5,
                        centeredSlides: true,
                        spaceBetween: 20
                    },
                    360: {
                        slidesPerView:1.5,
                        centeredSlides: true,
                        spaceBetween: 20
                    },
                    300: {
                        slidesPerView:1.3,
                        centeredSlides: true,
                        spaceBetween: 20
                    },
                    
                    
                }}
                
                spaceBetween={10}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
            {filterGuide !== null ? filterGuide.map((e) => {
                        return (
                        
                                <div className={styles.cardBody}>
                                    <SwiperSlide>
                                        <CardGuide2
                                            key={e._id}
                                            id={e._id}
                                            imageUrl={e.imgProfil}
                                            name={e.nama}
                                            work={e.work}
                                            alt={e.alt}
                                            desc={e.desc}
                                        />
                                    </SwiperSlide>
                                </div>
                            
                        )
                    }) : <div className={styles.error}>Tidak ada data</div>
                }
            </Swiper>
         </div>
    </div>
  )
}

export default Search