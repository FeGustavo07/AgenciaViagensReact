import React from "react";
import './styles.css'
import Footer from "../Footer";

import Card from "../Card";
import londres from "../../assets/londres.jpg";
import veneza from "../../assets/veneza.jpg"
import santorini from "../../assets/santorini-greece.jpg"
import amsterda from "../../assets/amsterda.jpg";
import jordania from "../../assets/jordania.jpg";
import salvador from "../../assets/salvador-gf87bd0a7e_640.jpg";
import austria from "../../assets/austria.jpg";
import saoPaulo from "../../assets/sp.jpg";
import rio from "../../assets/rio.jpg";
import china from "../../assets/chinese.jpg";
import egito from "../../assets/piramides.jpg";
import mount from "../../assets/mount-rushmore.jpg";
import maldivas from "../../assets/maldives-gdf8ee8399_640.jpg";



export default () => {

    return (
        <div className="body-destinos">
            <h1 className="h1-destino">Destinos</h1>
            <section className="cards-destinos">
                <Card path={saoPaulo} valor={700} titulo={'São Paulo - Brasil'} />
                <Card path={rio} valor={500} titulo={'Rio de Janeiro - Brasil'} />
                <Card path={salvador} valor={800} titulo={'Salvador - Brasil'} />
                <Card path={amsterda} valor={2200} titulo={'Amesterdã - Holanda'} />
                <Card path={jordania} valor={3200} titulo={'Petra - Joordânia'} />
                <Card path={austria} valor={1900} titulo={'Graz - Áustria'} />
                <Card path={china} valor={2000} titulo={'Xangai - China'} />
                <Card path={egito} valor={3000} titulo={'Gizé - Egito'} />
                <Card path={mount} valor={2200} titulo={'Keystone - EUA'} />
                <Card path={maldivas} valor={3200} titulo={'Maldivas - Ásia'} />
                <Card path={veneza} valor={1200} titulo={'Veneza - Itália'} />
                <Card path={santorini} valor={1200} titulo={'Santorini - Grécia'} />
            </section>
            <Footer />
        </div>
    )
}