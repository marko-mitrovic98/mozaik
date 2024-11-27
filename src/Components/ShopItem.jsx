import React, { useEffect, useState } from 'react';

export const ShopItem = ({productType}) => {
    const path = `/files/${productType}.json`
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(path);
                const data = await response.json();

                setItems(data);
            } catch (error) {
                console.error('Error loading Json file', error);
            }
        };

        fetchData();
    }, []);

    console.log(items);
    return (
        <>
            {items.map((item, index) => (
                 <a href={`/${productType}/${item.id}`}>
                    <div className="item" key={index}>
                    <div className="item-image">
                        <img src={item.cardPicture} />
                    </div>
                    <div className="item-title">
                        <h2>
                            {item.name} - {item.size}
                        </h2>
                    </div>
                    <div className="item-description">
                        <p>{item.manufacturer}</p>
                    </div>
                    <div className="item-price">
                        <h2>{item.price}.00</h2>
                    </div>
                </div>
                 </a>
            ))}
        </>
    );
};
