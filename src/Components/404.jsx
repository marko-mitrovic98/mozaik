import React from "react";
import { Link } from "react-router-dom";

export const MissingPage = () => {
    return <>
    <div style={{backgroundColor: "#2e8b57", display:"flex", justifyContent:"center", alignItems:"center" ,height:"100vh", flexDirection:"column"}}>
        <h1 style={{color: "#fff", fontSize:"100px", fontWeight:'800'}}>404 Stranica nije pronadjena</h1>
        <img src="/assets/logo1x1.png" alt="" style={{width:"200px",height:"200px"}}/>
        <Link to="/" style={{color: "#fff", fontSize:"20px", fontWeight:'800'}}>Vrati se na pocetnu</Link>
    </div>
    </>
}