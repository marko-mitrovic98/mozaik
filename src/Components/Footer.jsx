import React from "react";

export const Footer = () => {
    return <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="footer-logo">
                            <img src="/assets/logo1x1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="footer-open_time">
                            <h1>Radno vreme</h1>
                            <ul>
                                <li>Ponedeljak-Petak <span>7:30 - 18:00</span></li>
                                <li>Subota <span>8:00 - 14:00</span></li>
                                <li><span>Nedelja ne radimo</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="footer-contact">
                            <h1>Kontakt</h1>
                            <ul>
                                <li>Milovana Lazarevica 65m</li>
                                <li><a href="mailto:mozaikmm75@gmail.com" target="_blank">mozaikmm75@gmail.com</a></li>
                                <li><a href="tel:+11-27-8127-607">011/81-27-607</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}