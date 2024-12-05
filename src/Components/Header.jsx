import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/assets/logo1x1.png" alt="" />
                </Link>
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
                    <li>
                        <Link to="/" className='navLink'>Pocetna</Link>
                    </li>
                    <li className="dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                        <Link  className='navLink' onClick={(e) => e.preventDefault()}>
                            Proizovdi <span className="arrow">&#9660;</span>
                        </Link>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/ceramic-tiles">Keramika</a>
                                </li>
                                <li>
                                    <a href="/profiles">profili</a>
                                </li>
                                <li>
                                    <a href="/garrison">garnisne</a>
                                </li>
                                <li>
                                    <a href="/materials">materijali</a>
                                </li>
                                <li>
                                    <a href="/doors">vrata</a>
                                </li>
                                <li>
                                    <a href="/laminate">laminat</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* <li>
                        <Link to="/blog" className='navLink'>Blog</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};
