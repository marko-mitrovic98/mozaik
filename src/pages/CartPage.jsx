import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Components/Navbar.jsx';
import { Footer } from '../Components/Footer.jsx';
import { useCart } from '../context/CartContext.jsx';
import Swal from 'sweetalert2';

export const CartPage = () => {
    const { items, removeItem, setQty, clearCart, total } = useCart();

    useEffect(() => {
        document.title = 'Korpa';
    }, []);

    const buildSummary = () => {
        const lines = items.map(
            (item) => `${item.name} ${item.size} × ${item.qty} — ${Number(item.price) * item.qty} RSD`
        );
        lines.push(`UKUPNO: ${total} RSD`);
        return lines.join('\n');
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('access_key', '925b0772-4771-403a-8093-5a1e469c7d43');
        formData.append('subject', 'Novi upit iz korpe - Mozaik');
        formData.append('Korpa', buildSummary());

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: 'Vaš upit je uspešno poslat',
                icon: 'success',
            });
            event.target.reset();
            clearCart();
        } else {
            console.log('Error', data);
            Swal.fire({
                title: 'Greška pri slanju',
                text: data.message,
                icon: 'error',
            });
        }
    };

    return (
        <>
            <Navbar />
            <section className="section-cart">
                <div className="container">
                    <h1>Korpa za upit</h1>

                    {items.length === 0 ? (
                        <div className="cart-empty">
                            <p>Vaša korpa je prazna</p>
                            <Link to="/ceramic-tiles" className="button-57">
                                <span>Pogledaj proizvode</span>
                                <span>Pogledaj proizvode</span>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <ul className="cart-list">
                                {items.map((item) => (
                                    <li className="cart-item" key={item.id}>
                                        <img src={`/assets/${item.productType}/${item.cardPicture}`} alt={item.name} />
                                        <div className="cart-item-info">
                                            <h2>
                                                {item.name} {item.size}
                                            </h2>
                                            <p>{item.manufacturer}</p>
                                            <p className="cart-item-price">{Number(item.price)}.00 RSD</p>
                                        </div>
                                        <div className="qty-stepper">
                                            <button type="button" onClick={() => setQty(item.id, item.qty - 1)}>
                                                −
                                            </button>
                                            <span>{item.qty}</span>
                                            <button type="button" onClick={() => setQty(item.id, item.qty + 1)}>
                                                +
                                            </button>
                                        </div>
                                        <div className="cart-item-total">{Number(item.price) * item.qty} RSD</div>
                                        <button type="button" className="cart-remove" onClick={() => removeItem(item.id)}>
                                            ✕
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="cart-total">
                                <span>Ukupno:</span>
                                <strong>{total} RSD</strong>
                            </div>

                            <div className="cart-inquiry">
                                <h2>Pošalji upit</h2>
                                <p>Pošaljite nam listu proizvoda i javićemo vam se sa ponudom.</p>
                                <form onSubmit={onSubmit}>
                                    <input type="text" name="name" placeholder="Ime i Prezime" required />
                                    <input type="email" name="email" placeholder="E-mail" required />
                                    <input type="tel" name="phone" placeholder="Telefon" required />
                                    <textarea name="message" placeholder="Napomena (opciono)" />
                                    <button type="submit" className="button-57">
                                        <span>Pošalji upit</span>
                                        <span>Pošalji upit</span>
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};
