import React from 'react';

export const ShopItem = ({ productType, products }) => {
    return (
        <>
            {products.length > 0 ? (
                <>
                    {products.map((item, index) => (
                        <a href={`/${productType}/${item.id}`} class="card-link">
                            <div class="product-card" key={index}>
                                <div className="itemImage">
                                    <img src={`/assets/${productType}/${item.cardPicture}`} />
                                </div>
                                <h1>
                                    {item.name} - {item.size}
                                </h1>
                                <h2>
                                    {item.manufacturer} - {item.category}
                                </h2>
                                <p>{item.price}.00</p>
                            </div>
                        </a>
                    ))}
                </>
            ) : (
                <div></div>
            )}
        </>
    );
};
