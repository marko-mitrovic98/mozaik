import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { Shop } from './pages/Shop.jsx';
import { ProductPage } from './pages/ProductPage.jsx';
import { MissingPage } from './Components/404.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { CartPage } from './pages/CartPage.jsx';
import { CartProvider } from './context/CartContext.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <MissingPage />,
    },
    {
        path: '/cart',
        element: <CartPage />,
    },
    {
        path: '/:shop',
        element: <Shop />,
    },
    {
        path: '/:shop/:id',
        element: <ProductPage />,
    },
    {
        path: '/blog',
        element: <MissingPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </StrictMode>
);
