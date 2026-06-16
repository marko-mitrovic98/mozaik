import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'mozaik-cart';

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error reading cart from localStorage', error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addItem = (product, productType) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
            }
            return [
                ...prev,
                {
                    id: product.id,
                    productType,
                    name: product.name,
                    size: product.size,
                    manufacturer: product.manufacturer,
                    price: product.price,
                    cardPicture: product.cardPicture,
                    qty: 1,
                },
            ];
        });
    };

    const removeItem = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const setQty = (id, qty) => {
        const next = Math.max(1, qty);
        setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty: next } : item)));
    };

    const clearCart = () => setItems([]);

    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const total = items.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, setQty, clearCart, count, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
