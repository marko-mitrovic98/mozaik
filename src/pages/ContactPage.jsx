import React, { useEffect } from 'react';
import { Navbar } from '../Components/Navbar.jsx';
import { Footer } from '../Components/Footer.jsx';

export const ContactPage = () => {
    useEffect(() => {
        document.title = "Kontakt";
    }, []);

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
                                    <span>Matični broj:</span> 20308150
                                </li>
                                <li>
                                    <span>Broj tekućeg računa:</span> 160-278355-84
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
            <section className="section-contactPartners">
                <div className="row">
                    <h1>Naši partneri</h1>
                    </div>
                    <div className="row">
                        <img src="/assets/partners/zorka.png" alt="zorka keramika" />
                        <img src="/assets/partners/kanjiza.png" alt="kanjiza keramika" />
                        <img src="/assets/partners/ornament.png" alt="ornament keramika" />
                    </div>
                    <div className="row">
                        <img src="/assets/partners/balkania.png" alt="balkania keramika" />
                        <img src="/assets/partners/minotti.png" alt="minotti" />
                        <img src="/assets/partners/nordiker.png" alt="nordiker" />
                        <h2>fontana</h2>
                    </div>
                    <div className="row">
                        <img src="/assets/partners/europrofil.png" alt="europrofil" />
                        <img src="/assets/partners/maric.png" alt="vrata maric" />
                        <img src="/assets/partners/pinoles.png" alt="pinoles laminat" />
                    </div>
                    <div className="row">
                        <img src="/assets/partners/maxima.png" alt="maxima" />
                        <img src="/assets/partners/mapei.png" alt="mapei" />
                        <img src="/assets/partners/rofix.png" alt="rofix" />
                        <img src="/assets/partners/beorol.png" alt="beorol" />
                        <img src="/assets/partners/abs.png" alt="abs" />
                    </div>
            </section>
            <section className="section-contactForm">
                <div className="container">
                    <div className="row">
                        <h2>Pošalji nam poruku</h2>
                        <h3>Upit trenutno nije u funkciji</h3>
                        <form action="submit">
                            <input type="text" id="name" name="name" placeholder="Ime i Prezime" required />

                            <input type="email" id="email" name="email" placeholder="E-mail" required />

                            <input type="text" id="subject" name="subject" placeholder="Naslov poruke" required />

                            <textarea id="message" name="message" placeholder="Tekst Poruke" required />

                            <button type="submit" className="button-57">
                                <span>Pošalji</span>
                                <span>Pošalji</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
