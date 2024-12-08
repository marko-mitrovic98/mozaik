import React from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
    return <>
        <section className="section-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src="/assets/section_ceramic-tiles.jpg" alt="" />
                            <h1>Najnovija vest</h1>
                            <span>Najraznovrsniji dizajn najkvalitetnijih pločica za vaš dom</span>
                            <a href="#" className="button-57"> <span>Procitaj</span><span>Vise</span> </a>
                        </div>
                        <div className="col-3">
                            <img src="/assets/section_profiles.jpg" alt="" />
                            <h1>Stara vest</h1>
                            <span>Ukrasite ivice najkvalitetnijim profilima na tržištu</span>
                            <a href="#" className="button-57"> <span>Procitaj</span><span>Vise</span> </a>
                        </div>
                        <div className="col-3">
                            <img src="/assets/section_garrison.jpg" alt="" />
                            <h1>Prestara vest</h1>
                            <span>Garnišne najmodernijeg dizajna</span>
                            <a href="#" className="button-57"> <span>Procitaj</span><span>Vise</span> </a>
                        </div>
                    </div>
                    <div className="row">
                        <Link to="/blog" className="button-57 blog-btn"> <span>Idi na stranicu blog</span><span>Procitaj Vise</span> </Link>
                    </div>
                </div>
            </section>
    </>
}