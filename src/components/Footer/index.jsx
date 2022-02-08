import React from "react";
import './styles.css'
import insta from '../../assets/instagram.png'
import face from '../../assets/facebook.png'
import whats from '../../assets/whatsapp.png'

export default () => {
    return (
        <div className="footer">
            <section id="top">
                    <p>Telefone - (11) 2351-9990</p>
                    <p>Email - dreamtrip@gmail.com</p>
                    <p>Endereço - Av Paulista, n°1000 São Paulo SP</p> 
            </section>
            <section id="bottom">
                <article className="info-footer">
                    <h6>Minha Conta</h6>
                    <p>Meu perfil</p>
                    <p>minhas passagens</p>
                </article>
                <article className="info-footer">
                    <h6>Sobre Nós</h6>
                    <p>Missão</p>
                    <p>Visão</p>
                    <p>Valores</p>
                </article>
                <article className="info-footer">
                    <h6>Segurança</h6>
                    <p>Termos e condições</p>
                    <p>Politica de privacidade</p>
                </article>
                <div className="social-media">
                    <a href={''}><img src={face} alt="" /></a>
                    <a href={''}> <img src={insta} alt="" /></a>
                    <a href={''}> <img src={whats} alt="" /></a>
                </div>
            </section>
        </div>
    )
}