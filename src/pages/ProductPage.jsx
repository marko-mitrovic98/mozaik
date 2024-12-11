import React, { useEffect, useState } from 'react';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { useParams } from 'react-router-dom';
import { Loading } from '../Components/Loading';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const ProductPage = () => {
    const { shop, id, name } = useParams();
    const [loading, setLoading] = useState(true);
    const [increment, SetIncrement] = useState(0);
    const path = `/files/${shop}.json`;
    const [product, setProduct] = useState(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(path);
                const data = await response.json();
                const selectedProduct = data.find((p) => p.id === id);

                setProduct(selectedProduct);
                setTitle(selectedProduct.name);
                setLoading(false);
                const textFilePath = selectedProduct.description;
                const textResponse = await fetch(`/files/descriptions/${shop}/${textFilePath}.md`);
                const textContent = await textResponse.text();

                setText(textContent);
            } catch (error) {
                console.error('Error loading Json file', error);
                setLoading(false);
            }
        };

        fetchProductData();
    }, [id, shop]);

    document.title = `${title.toUpperCase()}`;

    const handlePlus = () => {
        SetIncrement((prev) => {
            prev = prev + 1;
            if (prev >= product.pictures.length) prev = 0;
            return prev;
        });
    };
    const handleMinus = () => {
        SetIncrement((p) => {
            p--;
            if (p < 0) p = product.pictures.length - 1;
            return p;
        });
    };

    if (loading) return <Loading />;
    else {
        return (
            <>
                <Navbar />
                <section class="section-item">
                    <div class="row">
                        <div class="col-7">
                            <img src={`/assets/${shop}/${product.pictures[increment]}`} />
                            <div class="arrow-left" onClick={handleMinus}>
                                <i class="fa-solid fa-arrow-left"></i>
                            </div>
                            <div class="arrow-right" onClick={handlePlus}>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div class="col-5">
                            <h1>
                                {product.name} {product.size}
                            </h1>
                            <h2>
                                {product.category} - {product.manufacturer}
                            </h2>
                            <h4>{product.price}.00</h4>
                            <h3>Opis Proizvoda</h3>
                            <p>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
                            </p>
                            <h3>Boje:</h3>
                            <ul>
                                {product.colors.map((p) => (
                                    <li>{p}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
};
