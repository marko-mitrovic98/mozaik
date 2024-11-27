import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Filter = ({ productType }) => {
    const path = `/files/${productType}.json`;
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(path);
                const data = await response.json();

                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error loading Json file', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleFilter = (category) => {
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered); // Update the filtered products in state
    };
    console.log(products)

    if (loading) return <p>Loading...</p>;
    else {
        return (
            <>
                <div className="filter">
                    <h1>Filteri</h1>
                    <h2>Proizvođač</h2>
                    <ul>
                        {products.map(p => {
                            <li>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span> {p.id}</span>
                            </label>
                        </li>
                        })}
                        
                    </ul>
                    <h2>Kategorija</h2>
                    <ul></ul>                    
                    <h2>Velicina</h2>
                    <ul></ul>
                    <h2>Boja</h2>
                    <ul></ul>
                </div>
            </>
        );
    }
};
