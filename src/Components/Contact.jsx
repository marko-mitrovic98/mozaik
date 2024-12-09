import React from 'react';
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <>
            <section className="section-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <h1>Kontakt</h1>
                            <h2>Poslovna jedinica</h2>
                            <p>
                                Adresa: Milovana Lazarevića 65m <br />
                                Grad: Lazarevac, 11550 <br />
                                Fiksni: 011/81-27-607
                                <br />
                                Mobilni: 062/317-872
                                <br />
                                E-mail: mozaikmm75@gmail.com
                            </p>
                            <h2>Podaci za identifikaciju</h2>
                            <p>
                                Mitar-komerc doo <br />
                                PIB: 105071643
                                <br />
                                Matični broj: 20308150
                                <br />
                                Broj tekućeg računa: 160-278355-84
                            </p>
                            <Link to="/contact" className="button-57">
                                <span>Jos informacija?</span>
                                <span>Vidi ovde</span>
                            </Link>
                        </div>
                        <div className="col-7">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8065.276246900021!2d20.247561977708507!3d44.379411596277336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759ffa07685435b%3A0xa6be3908720f638b!2sMITAR%20KOMERC!5e0!3m2!1ssr!2srs!4v1733433350543!5m2!1ssr!2srs"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
