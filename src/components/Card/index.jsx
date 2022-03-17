import React from "react";
import './styles.css';


export default ({path, valor, titulo}) => {
    return (
        <article className="card-p">
            <div className="img-area">
                <img src={path} alt="" className="img-card"/>
            </div>
            <div className="informations">
                <h3>{titulo}</h3>
                <span>R${valor}</span>
                <div className="button-area">
                    <button>VER DETALHES</button>
                    <button>COMPRAR</button>
                </div>
            </div>
        </article>
    )
}