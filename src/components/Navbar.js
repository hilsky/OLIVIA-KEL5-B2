import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import './styles/navbar.css';

function Navbar() {
  const navRef = useRef(); 

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if(window.scrollY >= 100) {
            setColorChange(true)
        } else {
            setColorChange(false)
        }
    };

    window.addEventListener('scroll', changeNavbarColor)

  return (
    <header className={colorChange ? 'colorChange' : 'header'}>
        <a className='logoBody' href="/">
          <div className='logo'>SABA</div>
          <div className='logo'>TOUR.</div>
        </a>
        <nav ref={navRef} className='nav-middle'>
            <a href="/">Home</a>
            <a href="/destinations">Destinations</a>
            <a href="/tour-guide">Tour Guide</a>
            <a href="/#">About Us</a>
            <div className="btn-position">
                <button className="btn">Sign Up</button>
                <button className="btn">Sign In</button>
            </div> 
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar
