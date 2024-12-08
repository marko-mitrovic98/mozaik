import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
    return <>
        <section className="section-hero">
                <div className="wave-container">
                    <div className="row">
                        <Link to="/" className="logo">
                            <img src="/assets/logo_blanco.png" alt="Mozaik" />
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h2>Salon keramike</h2>
                            <h1>Mozaik</h1>
                            <h3>Mesto gde svoj dom iz snova pretvarate u realnost</h3>
                            <a href="#section-products" className="button-57"><span className="text">Nasim proizvodima</span><span>Pogledaj ovde</span></a>
                        </div>
                        <div className="col-6">
                            <img src="/assets/worker-draw.png" alt="Mozaik" />
                        </div>
                    </div>
                </div>
            </section>
    </>
}