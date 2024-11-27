import React, { useEffect, useState } from 'react';
import { Header } from '../Components/header';
import { Footer } from '../Components/Footer';
import { useParams } from 'react-router-dom';
import { Loading } from '../Components/Loading';

export const ProductPage = () => {
    const { shop, id } = useParams();
    const [loading, setLoading] = useState(true);
    const [increment,SetIncrement] = useState(0);
    const path = `/files/${shop}.json`;
    const [product, setProduct] = useState(null);

    useEffect(() => {        
        const fetchProductData = async () => {
            try {
                const response = await fetch(path);
                const data = await response.json();
                const selectedProduct = data.find((p) => p.id === id);

                setProduct(selectedProduct);
                setLoading(false);
            } catch (error) {
                console.error('Error loading Json file', error);
                setLoading(false);
            }
        };

        fetchProductData();
        
    }, [id, shop]);

    const handlePlus = () =>{
        SetIncrement(prev => {
            prev= prev +1;
            if(prev>=product.pictures.length)
                prev = product.pictures.length -1;
            return prev;
        });

    };
    const handleMinus = () =>{
        SetIncrement(p => {
            p--;
            if(p<0)
                p=0;
            return p;
        });
    };    

    if (loading) return <Loading />;
    else {
        return (
            <>
                <Header />
                <main>
                    <section className="product-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div className="picture-section">
                                        <div className="main-picture">
                                            <img src={product.pictures[increment]} alt=""/>
                                            <div className='arrow-left' onClick={handleMinus}> {"<"} </div>
                                            <div className='arrow-right' onClick={handlePlus}> {">"} </div>
                                        </div>
                                        <div className="gallery">
                                            {product.pictures.map((p) => (
                                                <img src={p} ></img>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="product-content">
                                        <h1>{product.name} {product.size}</h1>
                                        <h2>{product.category} - {product.manufacturer}</h2>
                                        <h3>{product.price}.00</h3>
                                        <h4>Opis proizvoda</h4>
                                        <p>
                                            {product.description}
                                        </p>
                                        <h4>Boje:</h4>
                                        <ul>
                                            {product.colors.map(p => <li>{p}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }
};
