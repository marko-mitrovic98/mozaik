import React from "react";
import { Header } from './Components/header';
import { Hero } from './Components/Hero';
import { Products } from './Components/Products';
import { Services } from './Components/Services';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import {Footer} from './Components/Footer';

function App() {   
    return (
        <>
            <Header/>
            <Hero />
            <Products />
            <Services />
            <About />
            <Contact />
        </>
    );
}

export default App;
