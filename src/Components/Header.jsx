import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropMenuOpen, setDropMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropMenu = () => {
        setDropMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="menu-logo">
                        <img src="/assets/logo1x1.png" alt="" />
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <nav>
                    <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                        <li>
                            <Link to="/" className='navLink'>Pocetna</Link>
                        </li>
                        <li>
                            <a className='navLink' onClickCapture={toggleDropMenu}>Proizvodi</a>
                            <ul className={`dropdownMenu ${dropMenuOpen ? 'dropdownOpen' : ''}`}>
                                <li><a href="/ceramic-tiles">Keramika</a></li>
                                <li><a href="/profiles">profili</a></li>
                                <li><a href="/garrison">garnisne</a></li>
                                <li><a href="/materials">materijali</a></li>
                                <li><a href="/doors">vrata</a></li>
                                <li><a href="/laminate">laminat</a></li>
                            </ul>
                        </li>                        
                        <li><a href="" className='navLink'>Blog</a></li>                        
                    </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
