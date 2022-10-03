import React, {useEffect} from "react";
import styles from '../styles/tourguide.module.css';
import CardGuide from "../components/CardGuide";

import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { getGuidesList,  } from "../actions/guideAction";

const TourGuide = () => {

    const {getGuidesListResult, getGuidesLoading, getGuidesError} =
        useSelector((state) => state.guideReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGuidesList())
    }, [dispatch])


    return (
        <>
            <Helmet>
                <title>Pemandu Wisata</title>
                <meta name="description" content="TDengan adanya pemandu wisata, Anda akan dibantu mempersiapkan segala sesuatu yang berkaitan dengan perjalanan wisata Anda. Kami siap memberikan pengalaman berkesan bagi Anda selama berwisata." />
                <link rel="canonical" href="/tour-guide" />
                
            </Helmet>    
            <div className={styles.mainBody}>
                <div className={styles['container']}>
                    <div className={styles.slideOneBody}>
                        <h1 className={styles.slideOneText}>Bangkitkan </h1>
                        <h1 className={styles.slideOneText}>Parisiwata</h1>
                        <h1 className={styles.slideOneText}>Indonesia Maju</h1>
                        <div className={styles.slideOneParagraph}>
                            <p>Dengan adanya pemandu wisata, Anda akan dibantu mempersiapkan segala sesuatu yang berkaitan dengan perjalanan wisata Anda. Mulai dari penginapan, tempat makan, transportasi. Selain itu, Anda akan diberikan penjelasan tentang segala sesuatu yang berkaitan dengan destinasi wisata pada Anda. Baik itu sejarah tempat wisata, seluk beluknya, hingga detil masing-masing objek wisata. Sehingga Anda dapat memahami tempat yang Anda kunjungi.</p>
                        </div>
                        <div className={styles.slideOneText2}>
                            Pemandu Wisata
                        </div>
                    </div>
                </div>
            
                <div className={styles['container2']}>
                    <div className={styles.cardBody}>
                    {getGuidesListResult ? (getGuidesListResult.map((guide) => {
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
                </div>
                <div className={styles.container3}>
                    <div className={styles.slideThreeBody}>
                        <div>
                            <h1 className={styles.slideThreeText}>JADILAH</h1>
                            <h1 className={styles.slideThreeText}>BAGIAN DARI</h1>
                            <h1 className={styles.slideThreeText}>TIM KAMI.</h1>
                        </div>
                        <div className={styles.slideThreeParagraph}>
                            <p>Dengan Sabatour, Anda dapat membantu perekonomian Indonesia. selain itu, Anda dapat membantu para wisatawan untuk menemani selama perjalanan wisata sehingga wisatawan dapat terbantu dengan jasa Anda. 
                            Sabatour membantu Anda untuk mendapatkan lapangan pekerjaan dengan mudah dan praktis. 
                            Bergabunglah dengan kami dan nikmati pengalaman Anda dengan Sabatour.</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourGuide;