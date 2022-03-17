import React, { useEffect, useState } from "react";
import './promocoes.css'
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import londres from "../../assets/londres.jpg";
import veneza from "../../assets/veneza.jpg"
import santorini from "../../assets/santorini-greece.jpg"

export default () => {
   

    return (
        <div className="body-promocoes">
            <div className="view">
                <h1 className="h1-promo">Promoções</h1>
                <section className="cards">
                    <Card path={londres} valor={1200} titulo={""} />
                    <Card path={veneza} valor={1200} titulo={'Veneza - Itália'} />
                    <Card path={santorini} valor={1200} titulo={'Santorini - Grécia'} />
                </section>
            </div>
            <Footer />
        </div>
    )
}