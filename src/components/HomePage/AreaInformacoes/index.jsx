import React from 'react';
import './styles.css'

import cliente from '../../../assets/cliente.svg'

function index() {
  return (
    <div className='area-informacoes'>
         <section className='descricao'>
             <div className='card'>
                 <div className='titulos'>
                    <h3 className='titulo--primeiro'>Empresa número</h3>
                    <h3 className='titulo--segundo'>no mercado</h3>
                 </div>
                
                <div className='selo'>
                    <span className='numero'>1</span>
                </div>
            </div>
        </section>
        <section className='descricao'>
            <h2>Dream Trip</h2>
            <p>
                Somos uma empresa com mais de 30 anos de mercado,
                temos os melhores preços para que você e sua família
                façam aquela viagem dos sonhos.
            </p>
            <p>
                Planejar uma viagem requer conhecimento, dedicação, confiança e paixão, 
                para proporcionar a você uma experiência única e incomparável!
            </p>
        </section>
        <section className='descricao'>
            <img src={cliente} className='cliente-svg'/>
        </section>
    </div>
  )
}

export default index;
