import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage"
import Destinos from "./components/Destinos"
import Promocoes from "./components/Promocoes"
import Contato from "./components/Contato"
import ErrorPage from './components/ErrorPage';

export default () => {
    return(
        
        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/destinos" element={ <Destinos /> }/>
            <Route path="/promocoes" element={ <Promocoes /> }/>
            <Route path="/Contato" element={ <Contato /> }/>
            <Route path="*" element={ <ErrorPage /> }/>
        </Routes>

    )
 }
 
