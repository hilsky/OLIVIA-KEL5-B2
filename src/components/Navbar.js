import React, { useRef, useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
// import ModalEx from "./Modal";
import './styles/navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../actions/auth';
import { clearMessage } from '../actions/message';

import EventBus from "../common/EventBus";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {

  const [showPemanduBoard, setShowPemanduBoard] = useState(false)

  const { user: currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  let location = useLocation;

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage())
    }
  }, [dispatch, location])

  const logOut = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  useEffect(() => {
    if (currentUser) {
      setShowPemanduBoard(currentUser.roles.includes("ROLE_PEMANDU"))
    } else {
      setShowPemanduBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    })

    return () => {
      EventBus.remove("logout");
    }
  }, [currentUser, logOut])

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }


  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true)
    } else {
      setColorChange(false)
    }
  };

  window.addEventListener('scroll', changeNavbarColor)

  // const [smShow, setSmShow] = useState(false);

  let navigate = useNavigate();
  const changeToLogin = () => {
    let path = `/login`;
    navigate(path);
  }

  const changeToRegister = () => {
    let path = `/register`;
    navigate(path)
  }

  return (

    <header className={colorChange ? 'colorChange' : 'header'}>
      <a className='logoBody' href="/">
        <h1 className='sabatour'>SABA</h1>
        <h1 className='sabatour'>TOUR.</h1>
      </a>
      <nav ref={navRef} className='nav-middle'>
        <a href="/">Beranda</a>
        <a href="/destinasi">Destinasi</a>
        <a href="/tour-guide">Pemandu Wisata</a>
        {currentUser ? (
          <div className="btn-position">
            {/* <FaUserCircle className="icon-user" /> */}
            <a href="/login" onClick={logOut} className="btn-logout">Keluar</a>
          </div>
        ) : (
          <div className="btn-position">
            <button className="btn-2" onClick={changeToRegister}>Daftar</button>
            <button className="btn-2" onClick={changeToLogin}>Masuk</button>
          </div>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

    </header>
  )
}

export default Navbar