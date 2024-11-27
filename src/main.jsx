import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import { Shop } from './pages/Shop.jsx';
import { ProductPage } from './pages/ProductPage.jsx';
import { MissingPage } from './Components/404.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <MissingPage />
  },
  {
    path:'/:shop',
    element: <Shop />
   },
  {
    path:'/:shop/:id',
    element: <ProductPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
