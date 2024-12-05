import React, { useState, useEffect } from 'react';
import { Header } from '../Components/header.jsx';
import { ShopItem } from '../Components/ShopItem.jsx';
import { Sort } from '../Components/Sort.jsx';
import { Filter } from '../Components/Filter.jsx';
import { Footer } from '../Components/Footer.jsx';
import { useParams } from 'react-router-dom';

export const Shop = () => {
    const [selectedManufacturer, setSelectedManufacturers] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('default');
    const params = useParams();
    let title = '';

    const path = `/files/${params.shop}.json`;
    const [products, setProducts] = useState([]);
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

        const handler = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 500);

        return () => clearTimeout(handler);
    }, [searchQuery]);

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

    const handleManufacturerChange = (manufacturer) => {
        setSelectedManufacturers((prev) =>
            prev ? (prev.includes(manufacturer) ? prev.filter((manu) => manu !== manufacturer) : [...prev, manufacturer]) : [manufacturer]
        );
    };
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) => (prev ? (prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]) : [category]));
    };
    const handleColorsChange = (colors) => {
        setSelectedColors((prev) => (prev ? (prev.includes(colors) ? prev.filter((col) => col !== colors) : [...prev, colors]) : [colors]));
    };
    const handleSizeChange = (size) => {
        setSelectedSizes((prev) => (prev ? (prev.includes(size) ? prev.filter((manu) => manu !== size) : [...prev, size]) : [size]));
    };
    const handleSortChange = (option) => {
        setSortOption(option);
    };

    let filteredProducts = products.filter((product) => {
        const matchesManufacturer = !selectedManufacturer.length || selectedManufacturer.includes(product.manufacturer);

        const matchesCategory = !selectedCategories.length || selectedCategories.includes(product.category);

        const matchesColor = !selectedColors.length || product.colors.some((color) => selectedColors.includes(color));

        const matchesSize = !selectedSizes.length || selectedSizes.includes(product.size);

        const matchesSearch = !searchQuery || product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase());

        return matchesManufacturer && matchesCategory && matchesColor && matchesSize && matchesSearch;
    });

    filteredProducts = filteredProducts.sort((a, b) => {
        if (sortOption === 'price-asc') {
            return a.price - b.price;
        }
        if (sortOption === 'price-desc') {
            return b.price - a.price;
        }
        if (sortOption === 'title') {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    if (loading) return <p>Loading...</p>;
    else {
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
                            <Sort searchQuery={searchQuery} onSearchChange={setSearchQuery} sortOption={sortOption} onSortChange={handleSortChange} />
                            <div className="row">
                                <Filter
                                    productType={params.shop}
                                    selectedManufacturer={selectedManufacturer}
                                    selectedCategories={selectedCategories}
                                    selectedColors={selectedColors}
                                    selectedSizes={selectedSizes}
                                    onManufacturerChange={handleManufacturerChange}
                                    onCategoryChange={handleCategoryChange}
                                    onColorChange={handleColorsChange}
                                    onSizeChange={handleSizeChange}
                                />
                                <div className="product-list">
                                    <div className="filter-rwd">
                                        <h1>Filteri</h1>
                                    </div>
                                    <div className="row">
                                        <ShopItem productType={params.shop} products={filteredProducts} />
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
