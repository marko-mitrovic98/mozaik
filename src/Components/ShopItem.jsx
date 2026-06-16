import React from 'react';
import Swal from 'sweetalert2';
import { useCart } from '../context/CartContext.jsx';

export const ShopItem = ({ productType, products }) => {
    const { addItem } = useCart();

    const handleAdd = (event, item) => {
        event.preventDefault();
        event.stopPropagation();
        addItem(item, productType);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Dodato u korpu',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <>
            {products.length > 0 ? (
                <>
                    {products.map((item, index) => (
                        <a href={`/${productType}/${item.id}`} class="card-link" key={index}>
                            <div class="product-card">
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
                                <button type="button" class="add-to-cart-btn" onClick={(e) => handleAdd(e, item)}>
                                    Dodaj u korpu
                                </button>
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
