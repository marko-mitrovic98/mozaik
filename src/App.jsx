import React from "react";
import { Hero } from './Components/Hero';
import { Products } from './Components/Products';
import { Services } from './Components/Services';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import {Blog} from './Components/BlogSection';

function App() {   
    return (
        <>
            <Hero />
            <Services />
            <Products />
            {/* <Blog /> */}
            <About />
            <Contact />
        </>
    );
}

export default App;
