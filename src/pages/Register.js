import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import styles from '../styles/register.module.css';
import LoginLogo from '../assets/logo/loginLogo.png'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Register extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.column1}>
                    <div className={styles.headerBody}>
                        <h1 className={styles.headerText}>SABA</h1>
                        <h1 className={styles.headerText}>TOUR</h1>
                    </div>
                    <img src={LoginLogo} className={styles.logo} />
                </div>
                <div className={styles.column2}>
                    <div className={styles.formBody}>
                        <h2 className={styles.header2}>Buat Akun</h2>
                        <Form className={styles.inputBody}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Nama Lengkap" className={styles.inputField} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Alamat email" className={styles.inputField} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Password" className={styles.inputField} />
                            </Form.Group>
                            <Button variant="info" className={styles.btnLogin} type="submit">Masuk</Button>
                        </Form>
                        <div className={styles.text}>Sudah punya akun?
                            <Link className={styles.textMasuk} to='/login'>Masuk</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;