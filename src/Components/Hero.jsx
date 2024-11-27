import React from "react";

export const Hero = () => {
    return <>
        <section className="section-hero" id="section-hero">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="hero-content">
                            <h2>Salon keramike</h2>
                            <h1 className="first-h">Mitar komerc</h1>
                            <h1 className="second-h">Mozaik</h1>
                            <h3>Mesto gde svoj dom iz snova pretvarate u realnost</h3>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="hero-banner">
                            <img src="/assets/logo1x1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}