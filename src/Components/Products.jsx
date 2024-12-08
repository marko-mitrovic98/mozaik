import React from 'react';
import { ProductsCard } from './ProductsCard';

export const Products = () => {
    return (
        <>            
            <section className="section-products" id="section-products">
                <div className="wave-container">
                    <div className="container">
                        <div className="row">
                            <ProductsCard title="Keramika" description="Najraznovrsniji dizajn najkvalitetnijih pločica za vaš dom" category="ceramic-tiles" />
                            <ProductsCard title="Profili" description="Ukrasite ivice najkvalitetnijim profilima na tržištu" category="profiles" />
                            <ProductsCard title="Garnisne" description="Garnišne najmodernijeg dizajna" category="garrison" />
                            <ProductsCard title="Materijali" description="Materijali koji omogućavaju majstorima lakši život" category="materials" />
                            <ProductsCard title="Vrata" description="Najkvalitetnija vrata domaće proizvodnje" category="doors" />
                            <ProductsCard title="Laminat" description="Laminat po svačijoj želji" category="laminate" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
