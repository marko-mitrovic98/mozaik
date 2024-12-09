import React, { useState } from 'react';
import { Navbar } from '../Components/Navbar.jsx';
import { Footer } from '../Components/Footer.jsx';

const items = [
    { title: "Section 1", content: "Content for section 1." },
    { title: "Section 2", content: "Content for section 2." },
    { title: "Section 3", content: "Content for section 3." },
  ];

export const AboutPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <section className="section-aboutPage">
                <div className="container">
                    <div className="row">
                        <h1>O Nama</h1>
                        <p>
                            Mitar-komerc, poznata kao i Mozaik Lazarevac, je firma koja se vise od 20 godina bavi maloprodajom keramičkih pločica (domaćih i
                            stranih proizvođača), granitnih pločica, lepkova za pločice, fug masa, lajsni i dodatne opreme za potrebe ugradnje pločica.
                            <br />
                            <br />
                            U ponudi imamo i asortiman garnišni, a takođe vršimo prodaju i ugradnju sobnih vrata firme "Marić" iz Čačka.
                            <br />
                            <br />
                            U našoj ponudi uvek možete pronaći dizajn različite tipologije materijala.
                            <br />
                            <br />
                            Naš cilj je da klijentima ponudimo proizvode koji, osim što su visokog kvaliteta, su i modernog dizajna, a i da brzo stignemo do
                            njih!
                        </p>
                        <img src="/assets/logo1x1.png" alt="Mozaik lokal" />
                        <h2>Pravilnik</h2>
                        <div className="accordion">
                            {items.map((item, index) => (
                                <div key={index} className="accordion-item">
                                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                        <h3>{item.title}</h3>
                                        <span>{activeIndex === index ? '▲' : '▼'}</span>
                                    </div>
                                    <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                                        {activeIndex === index && <p>{item.content}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
