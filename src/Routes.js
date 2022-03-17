import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage"
import Destinos from "./pages/Destinos"
import Promocoes from "./pages/Promocoes"
import Contato from "./pages/Contato"
import CadastroDestino from "./pages/GerenciarDestino"
import ErrorPage from './components/ErrorPage'

export default () => {
    return(
        
        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/destinos" element={ <Destinos /> }/>
            <Route path="/promocoes" element={ <Promocoes /> }/>
            <Route path="/Contato" element={ <Contato /> }/>
            <Route path="/destinos/gerenciar" element={ <CadastroDestino /> }/>
            <Route path="*" element={ <ErrorPage /> }/>
        </Routes>

    )
 }
 
