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
                    <button>Ver detalhes</button>
                    <button>Comprar</button>
                </div>
            </div>
        </article>
    )
}