import React, { useEffect } from 'react';
import styles from '../styles/detailGuides.module.css';
import { useLocation } from 'react-router-dom';
import {HiStar, HiOutlineStar, HiLocationMarker, HiCalendar} from 'react-icons/hi';
import {FaWallet} from 'react-icons/fa'
const DetailGuides = () => {

    return (
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
                            <div className={styles.calenderBody}>
                                <HiCalendar className={styles.iconCal} />
                                <div className={styles.calText}>
                                    Lama perjalanan
                                </div>
                                <div className={styles.calText2}>
                                    27Sep - 29Sep
                                </div>
                            </div>
                            <div className={styles.verticalLine}></div>
                            <div className={styles.currencyBody}>
                                <FaWallet className={styles.iconCur} />
                                <div className={styles.curText}>
                                    harga per hari
                                </div>
                                <div className={styles.curText2}>
                                    Rp 99.999
                                </div>
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
                        <div className={styles.cardBody}>
                            <img className={styles.cardImg} src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png'}/>
                            <div classname={styles.cardColumn}>
                                <div className={styles.cardHeader}>
                                    User2
                                </div>
                                <div className={styles.cardDesc}>
                                    <HiLocationMarker className={styles.locIcon2} />
                                    Bali
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
                        <div className={styles.cardBody}>
                            <img className={styles.cardImg} src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png'}/>
                            <div classname={styles.cardColumn}>
                                <div className={styles.cardHeader}>
                                    User2
                                </div>
                                <div className={styles.cardDesc}>
                                    <HiLocationMarker className={styles.locIcon2} />
                                    Bali
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
                        <div className={styles.cardBody}>
                            <img className={styles.cardImg} src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png'}/>
                            <div classname={styles.cardColumn}>
                                <div className={styles.cardHeader}>
                                    User2
                                </div>
                                <div className={styles.cardDesc}>
                                    <HiLocationMarker className={styles.locIcon2} />
                                    Bali
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
                        
                    </div>
                </div>
            </div>
            {/* <div className={styles.secondBody}>
                <div>

                </div>
            </div> */}
        </div>
  )
}

export default DetailGuides