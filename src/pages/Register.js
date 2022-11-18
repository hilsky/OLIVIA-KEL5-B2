import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/register.module.css';
import LoginLogo from '../assets/logo/loginLogo.png'
import { Form, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { register } from '../actions/auth';

import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [errorFullName, setErrorFullName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [validated, setValidated] = useState(false);


    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.message)

    const onChangeFullName = (e) => {
        const fullName = e.target.value;
        setFullName(fullName);
    }

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        const form = e.currentTarget;

        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (fullName.length === 0 && email.length === 0 && password.length === 0) {
            setSuccessful(false);
            setErrorEmail('Wajib diisi');
            setErrorFullName('Wajib diisi');
            setErrorPassword('Wajib diisi');
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
        else if (password.length < 8) {
            toast.error('Password minimal 8 karakter', {
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
            dispatch(register(fullName, email, password))
                .then(() => {
                    setSuccessful(true)
                    toast.success('Yeay, akun berhasil dibuat', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setFullName('');
                    setPassword('');
                    setEmail('');
                })
                .catch((err) => {
                    setSuccessful(false)
                })
        }

        setValidated(true);
    }



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
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className={styles.formBody}>
                    <h2 className={styles.header2}>Buat Akun</h2>
                    <Form className={styles.inputBody} onSubmit={handleRegister} >
                        <Form.Group>
                            <Form.Control type="text" placeholder="Nama Lengkap" className={styles.inputField}
                                value={fullName}
                                onChange={onChangeFullName}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="email" placeholder="Alamat email" className={styles.inputField}
                                value={email}
                                onChange={onChangeEmail}
                                required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" className={styles.inputField}
                                value={password}
                                onChange={onChangePassword}
                                required
                            />
                        </Form.Group>

                        <Button variant="info" className={styles.btnLogin} type="submit">Daftar</Button>
                    </Form>
                    <div className={styles.text}>Sudah punya akun?
                        <Link className={styles.textMasuk} to='/login'>Masuk</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;