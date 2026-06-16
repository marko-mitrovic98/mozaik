import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext.jsx';

export const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { count } = useCart();

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/assets/logo.png" alt="" />
                </Link>
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
                    <li>
                        <Link to="/" className="navLink">
                            Početna
                        </Link>
                    </li>
                    <li className="dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                        <a className="navLink">
                            {' '}
                            Proizovdi <span className="arrow">&#9660;</span>{' '}
                        </a>
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
                        <a href="#" className="navLink">
                            Blog
                        </a>
                    </li> */}
                    <li>
                        <Link to="/about" className="navLink">
                            O Nama
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="navLink">
                            KONTAKT
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="cart-link">
                            <ShoppingCartIcon fontSize="small" />
                            {count > 0 && <span className="cart-badge">{count}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>        
    );
};
