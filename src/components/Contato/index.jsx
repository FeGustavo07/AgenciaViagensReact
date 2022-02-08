import React from "react";
import './styles.css'

import Footer from "../Footer";

export default () => {
    return (
        <div className="body-contato">
            <div className="view-area">
                <form>
                    <h1>Contato</h1>
                    <div class="input-area">
                        <input type="text" placeholder="Digite seu nome..." class="format-input" />
                        <input type="email" placeholder="Digite seu email..." class="format-input" />
                    </div>
                    <textarea cols="30" rows="10" placeholder="Digite aqui sua sugestão ou reclamação..."></textarea>
                    <button type="submit" className="sweep-to-right">Enviar</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}