import React from 'react';

export const Contact = () => {
    return (
        <>
            <section className="section-contact" id='section-contact'>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="contact">
                                <h1>Kontakt</h1>
                                <h2>Poslovna jedinica</h2>
                                <p>
                                    Adresa: Milovana Lazarevica 65m <br />
                                    Grad: Lazarevac, 11550 <br />
                                    Fiksni: <a href="tel:+11-27-8127-607">011/81-27-607</a> <br />
                                    Mobilni: <a href="tel:+381-62-317-872">062/317-872</a> <br />
                                    E-mail: mozaikmm75@gmail.com
                                </p>
                                <h2>Podaci za identifikaciju</h2>
                                <p>
                                    Mitar-komerc doo <br />
                                    PIB: 105071643
                                    <br />
                                    Matični broj: 12345678
                                    <br />
                                    Broj tekućeg računa: 100-123456-78
                                </p>
                            </div>
                        </div>
                        <div className="col-7">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d299.7522397202128!2d20.24825750640065!3d44.376929755103895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759ffa07685435b%3A0xa6be3908720f638b!2sMITAR%20KOMERC!5e0!3m2!1ssr!2srs!4v1731607448300!5m2!1ssr!2srs"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
