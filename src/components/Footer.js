import React from 'react';
import styles from './styles/footer.module.css';


function Footer() {

    return (
        <div className={styles.container}>
            <div className={styles.columnOneBody}>
                <h1 className={styles.columnOneText}>SABA</h1>
                <h1 className={styles.columnOneText}>TOUR.</h1>
            </div>
            <div className={styles.columnTwoBody}>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 1</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 2</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 1</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 2</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 1</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 2</a>
            </div>
            <div className={styles.columnTwoBody}>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 1</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 2</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 1</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 2</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 1</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 2</a>
            </div>
            <div className={styles.columnTwoBody}>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 1</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 2</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 1</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 2</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 1</a>
                <a className={styles.columnTwoText} href='/#'>Column 2 Line 2</a>
            </div>
           
        </div>
    )
}

export default Footer;