import React, { useState, useEffect } from 'react';

export const Filter = ({
    productType,
    selectedManufacturer,
    selectedCategories,
    selectedColors,
    selectedSizes,
    onManufacturerChange,
    onCategoryChange,
    onColorChange,
    onSizeChange,
}) => {
    const path = `/files/${productType}.json`;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    const toggleFilterMenu = () => setIsFilterMenuOpen(!isFilterMenuOpen);

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

    let title;
    switch (productType) {
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
    document.title = title;

    const uniqueManufacturer = [...new Set(products.map((product) => product.manufacturer))];
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    const uniqueSizes = [...new Set(products.map((product) => product.size))];
    const uniqueColors = [...new Set(products.flatMap((product) => product.colors))];

    if (loading) return <p>Loading...</p>;
    else {
        return (
            <>
            <div className={`col-3 sidebar ${isFilterMenuOpen ? 'openFilterMenu' : ''}`}>
                    <h1 className="title">{title}</h1>
                    <h1 className={`filter-title `} onClick={toggleFilterMenu}>Filteri</h1>
                    <h2>Proizvođač</h2>
                    <ul>
                        {uniqueManufacturer.map((p) => {
                            return (
                                <>
                                    <li>
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                value={p}
                                                checked={selectedManufacturer && selectedManufacturer.includes(p)}
                                                onChange={() => onManufacturerChange(p)}
                                            />
                                            <span>{p}</span>
                                        </label>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                    <h2>Kategorija</h2>
                    <ul>
                        {uniqueCategories.map((p) => {
                            return (
                                <>
                                    <li>
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                value={p}
                                                checked={selectedCategories && selectedCategories.includes(p)}
                                                onChange={() => onCategoryChange(p)}
                                            />
                                            <span>{p}</span>
                                        </label>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                    <h2>Veličina</h2>
                    <ul>
                        {uniqueSizes.map((p) => {
                            return (
                                <>
                                    <li>
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                value={p}
                                                checked={selectedSizes && selectedSizes.includes(p)}
                                                onChange={() => onSizeChange(p)}
                                            />
                                            <span>{p}</span>
                                        </label>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                    <h2>Boja</h2>
                    <ul>
                        {uniqueColors.map((p) => {
                            return (
                                <>
                                    <li>
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                value={p}
                                                checked={selectedColors && selectedColors.includes(p)}
                                                onChange={() => onColorChange(p)}
                                            />
                                            <span>{p}</span>
                                        </label>
                                    </li>
                                </>
                            );
                        })}
                    </ul>    
                </div>                
            </>
        );
    }
};
