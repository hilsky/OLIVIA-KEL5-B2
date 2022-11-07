import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ModalEx from "./Modal";
import './styles/navbar.css';

function Navbar() {
  const navRef = useRef(); 

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if(window.scrollY >= 80) {
            setColorChange(true)
        } else {
            setColorChange(false)
        }
    };

    window.addEventListener('scroll', changeNavbarColor)

    const [smShow, setSmShow] = useState(false);

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
            
            <div className="btn-position">
                <button className="btn-2" onClick={() => setSmShow(true)}>Daftar</button>
                <button className="btn-2" onClick={() => setSmShow(true)}>Masuk</button>
            </div> 
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
        </button>
        <ModalEx 
          show={smShow}
          onHide={() => setSmShow(false)}
        />
    </header>
  )
}

export default Navbar
