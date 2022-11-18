import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import styles from '../styles/register.module.css';
import LoginLogo from '../assets/logo/loginLogo.png'
import { Form, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { register } from '../actions/auth';

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
        else if (password.length < 8) {
            setErrorPassword('Password diisi minimal 8 karakter')
        }
        else {
            dispatch(register(fullName, email, password))
                .then(() => {
                    setSuccessful(true)
                })
                .catch(() => {
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
                <div className={styles.formBody}>
                    <h2 className={styles.header2}>Buat Akun</h2>
                    <Form className={styles.inputBody} onSubmit={handleRegister} noValidate validated={validated}>
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