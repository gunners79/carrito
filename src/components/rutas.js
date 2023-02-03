import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './home'
import Header from "./header";
import Carrito from "./Carrito";
import Home from "./home";
import Error from "./error";
import Footer from "./footer";
import 'boxicons';


const Rutas = () => {
    return (
        <Router>
            < Header /> 
                <Routes>                
                    <Route path="/" element={<Home />} />
                    <Route path="/Productos" element={<Carrito />} />
                    <Route path="/*" element={<Error />} />           
                </Routes>
                <Footer /> 
        </Router>
    );
}

export default Rutas;