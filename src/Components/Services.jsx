import React from "react";

export const Services = () => {

    return <>
        <section className="section-services">
                <div className="wave-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <img src="/assets/van-icon.png" alt="Kombi Mozaik" />
                                <h1>Dostava</h1>
                                <p>Vršimo dostavu na vasu kućnu adresu</p>
                            </div>
                            <div className="col-2">
                                <img src="/assets/diversity.png" alt="Mozaik" />
                                <h1>Raznovrsnot</h1>
                                <p>Veliki izbor najkvalitetnijih brendova na jednom mestu</p>
                            </div>
                            <div className="col-2">
                                <img src="/assets/card-icon.png" alt="Placanje Mozaik" />
                                <h1>Plaćanje</h1>
                                <p>Platite kešom, karticom ili odloženo na rate</p>
                            </div>
                            <div className="col-2">
                                <img src="/assets/return-icon.png" alt="Povrat Mozaik" />
                                <h1>Povrat robe</h1>
                                <p>Iskoristite mogućnost povrata neiskorišćene robe</p>
                            </div>
                            <div className="col-2">
                                <img src="/assets/worker-icon.png" alt="Majstor Mozaik" />
                                <h1>Majstori</h1>
                                <p>Možemo vam obezbediti naše najbolje majstore saradnike</p>
                            </div>
                            <div className="col-2">
                                <img src="/assets/door-icon.png" alt="Vrata Mozaik" />
                                <h1>Ugradnja</h1>
                                <p>Sva vrata mi vam i ugradjujemo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
}