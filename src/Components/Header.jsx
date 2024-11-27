import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                            <Link to="/">Pocetna</Link>
                        </li>
                        <li>
                            <a href="/#section-products">Proizvodi</a>
                        </li>
                        <li>
                            <a href="/#section-services">Usluge</a>
                        </li>
                        {/* <li><a href="">Blog</a></li> */}
                        <li>
                            <a href="/#section-about">O Nama</a>
                        </li>
                        <li>
                            <a href="/#section-contact">Kontakt</a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
