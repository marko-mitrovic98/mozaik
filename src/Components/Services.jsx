import React from "react";

export const Services = () => {

    return <>
        <section className="section-services" id="section-services">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="/assets/van-icon.png" alt="" />
                        <h1>Dostava</h1>
                        <span>Sve proizvode koje kupite kod nas dostavljamo vam na vasu kucnu adresu</span>
                    </div>
                    <div className="col-6">
                        <img src="/assets/worker-icon.png" alt="" />
                        <h1>Obezbedjivanje majstora</h1>
                        <span>Ako nemate svog majstora, mi vam mozemo obezbediti nase najbolje majstore saradnike</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img src="/assets/door-icon.png" alt="" />
                        <h1>Ugradnja sobnih vrata</h1>
                        <span>Sva vrata koja kupite kod nas, mi vam i ugradjujemo</span>
                    </div>
                    <div className="col-6">
                        <div className="image"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
}