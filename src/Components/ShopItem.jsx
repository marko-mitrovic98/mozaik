import React from 'react';

export const ShopItem = ({productType, products}) => {  
    
    return (
        <>
            {products.length > 0 ? (
                <>
                {products.map((item, index) => (
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
                        <p>{item.manufacturer} - {item.category}</p>
                    </div>
                    <div className="item-price">
                        <h2>{item.price}.00</h2>
                    </div>
                </div>
                 </a>
            ))}
                </>
            ) : (<div></div>)}
            
        </>
    );
};
