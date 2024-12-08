import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return <>        
        <section className="section-about">
                <div className="container">
                    <div className="row">
                        <div className="col-7"></div>
                        <div className="col-5">
                            <h1>O Nama</h1>
                            <p>
                                Mitar-komerc, poznata kao i Mozaik Lazarevac, je firma koja se vise od 20 godina bavi maloprodajom keramičkih pločica (domaćih i
                                stranih proizvođača), granitnih pločica, lepkova za pločice, fug masa, lajsni i dodatne opreme za potrebe ugradnje pločica.<br /><br />
                                U ponudi imamo i asortiman garnišni, a takođe vršimo prodaju i ugradnju sobnih vrata firme "Marić" iz Čačka.<br /><br />
                                U našoj ponudi uvek možete pronaći dizajn različite tipologije materijala.<br /><br />
                                Naš cilj je da klijentima ponudimo proizvode koji, osim što su visokog kvaliteta, su i modernog dizajna, a i da brzo stignemo do
                                njih!
                            </p>
                            <Link to="/about" className="button-57"><span>Jos informacija?</span><span>Vidi ovde</span></Link>
                        </div>
                    </div>
                </div>
            </section>
    </>
}