import React from "react";
import './contato.css'

import Footer from "../../components/Footer";

export default () => {
    return (
        <div className="body-contato">
            <div className="view-area">
                <form className="form-contato">
                    <h1>Contato</h1>
                    <div class="input-area">
                        <input type="text" placeholder="Digite seu nome..." className="format-input" />
                        <input type="email" placeholder="Digite seu email..." className="format-input" />
                    </div>
                    <textarea cols="30" rows="10" placeholder="Digite aqui sua sugestão ou reclamação..."></textarea>
                    <button type="submit" className="sweep-to-right">ENVIAR</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}