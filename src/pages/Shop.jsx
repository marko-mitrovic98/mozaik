import React from 'react';
import { Header } from '../Components/header.jsx';
import { ShopItem } from '../Components/ShopItem.jsx';
import { Sort } from '../Components/Sort.jsx';
import { Filter } from '../Components/Filter.jsx';
import { Footer } from '../Components/Footer.jsx';
import { useParams } from 'react-router-dom';

export const Shop = () => {
    const params = useParams();
    let title = '';
    
    switch (params.shop) {
        case 'ceramic-tiles':
            title = 'Keramicke Plocice';
            break;
        case 'profiles':
            title = 'Profili';
            break;
        case 'garrison':
            title = 'Garnisne';
            break;
        case 'materials':
            title = 'Materijali';
            break;
        case 'doors':
            title = 'Vrata';
            break;
        case 'laminate':
            title = 'Laminat';
            break;
    }

    return (
        <>
            <Header />
            <main>
                <section className="section-shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <h1>{title}</h1>
                            </div>
                            <div className="col-8">
                                <div className={`image-${params.shop}`}></div>
                            </div>
                        </div>
                        <div className="row">
                            <Filter productType={params.shop} />
                            <div class="product-list">
                                <div class="filter-rwd">
                                    <h1>Filteri</h1>
                                </div>
                                <Sort />
                                <div class="row">
                                    <ShopItem productType={params.shop} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
