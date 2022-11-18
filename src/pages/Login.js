import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/login.module.css';
import LoginLogo from '../assets/logo/loginLogo.png'
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { connect, useSelector, useDispatch } from "react-redux";
import { login } from '../actions/auth';
import { ToastContainer, toast } from 'react-toastify';



const required = (value) => {
    if (!value) {
        return (
            <div classname={[styles.alert].join(' ')} role="alert">
                Semua field wajib diisi!
            </div>
        )
    };
};

const Login = (props) => {
    let navigate = useNavigate();

    const form = useRef();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth)
    const { message } = useSelector(state => state.message)

    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email.length === 0 && password.length === 0) {
            setLoading(false);
            setErrorEmail(true);
            setErrorPassword(true);
        }
        else if (!(email.match(regexp))) {
            toast.error('Email tidak valid', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            dispatch(login(email, password))
                .then(() => {
                    navigate('/');
                    toast.success('Yeay, berhasil login', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setLoading(true);
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                })
        }
    }

    if (isLoggedIn) {
        return <Navigate to="/" />
    }

    return (
        <div className={styles.container}>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className={styles.column1}>
                <div className={styles.headerBody}>
                    <h1 className={styles.headerText}>SABA</h1>
                    <h1 className={styles.headerText}>TOUR</h1>
                </div>
                <img src={LoginLogo} className={styles.logo} />
            </div>
            <div className={styles.column2}>
                <div className={styles.formBody}>
                    <h2 className={styles.header2}>Masuk</h2>
                    <Form className={styles.inputBody} onSubmit={handleLogin}>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Alamat email" className={styles.inputField}
                                onChange={onChangeEmail}
                                value={email}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" className={styles.inputField}
                                value={password}
                                onChange={onChangePassword}
                            />
                            <a className={styles.forgotPassword}>Lupa password?</a>

                        </Form.Group>
                        <Button variant="info" className={styles.btnLogin} type="submit">Masuk</Button>
                    </Form>
                    <div className={styles.text}>Belum punya akun?
                        <Link className={styles.textMasuk} to='/register'>Daftar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;