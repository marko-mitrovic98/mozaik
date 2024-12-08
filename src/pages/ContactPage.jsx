import React, { useState } from 'react';
import { Navbar } from '../Components/Navbar.jsx';
import { Footer } from '../Components/Footer.jsx';

export const ContactPage = () => {
    return (
        <>
            <Navbar />
            <section className="section-contactPage">
                <div className="container">
                    <div className="row">
                        <h1>Kontakt</h1>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h2>Poslovna jedinica</h2>
                            <ul>
                                <li>
                                    <span>Adresa:</span> Milovana Lazarevića 65m
                                </li>
                                <li>
                                    <span>Grad:</span> Lazarevac
                                </li>
                                <li>
                                    <span>Fiksni:</span> 011/81-27-607
                                </li>
                                <li>
                                    <span>Mobilni:</span> 062/317-872
                                </li>
                                <li>
                                    <span>E-mail:</span> mozaikmm75@gmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h2>Podaci za identifikaciju</h2>
                            <ul>
                                <li>
                                    <span>Mitar-komerc doo</span>
                                </li>
                                <li>
                                    <span>PIB:</span> 105071643
                                </li>
                                <li>
                                    <span>Maticni broj:</span> 123456789
                                </li>
                                <li>
                                    <span>Broj tekuceg racuna:</span> 100-123456-78
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-contactMap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8065.276246900021!2d20.247561977708507!3d44.379411596277336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759ffa07685435b%3A0xa6be3908720f638b!2sMITAR%20KOMERC!5e0!3m2!1ssr!2srs!4v1733433350543!5m2!1ssr!2srs"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
            <section className='section-contactForm'>
                <div className="container">
                    <div className="row">
                        <h2>Posalji nam poruku</h2>
                        <h3>Upit trenutno nije u funkciji</h3>
                        <form action="submit">                                                    
                                <input type="text" id='name' name='name' placeholder='Ime i Prezime' required/>                            
                                                    
                                <input type="email" id='email' name='email' placeholder='E-mail' required/>                            
                                                    
                                <input type="text" id='subject' name='subject' placeholder='Naslov poruke' required/>
                            
                                <textarea id='message' name='message' placeholder='Tekst Poruke' required/>

                                <button type='submit' className='button-57'><span>Posalji</span><span>Posalji</span></button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
