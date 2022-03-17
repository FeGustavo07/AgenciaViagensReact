import React from 'react';
import './areaInfo.css'

import cliente from '../../../assets/cliente.svg'

function index({ref}) {
  return (
    <div className='area-informacoes' onClick={ref}>
         <section className='descricao'>
            <h2 className='title-infoArea'>Nossa Empresa</h2>
            <p>
                Somos uma empresa com mais de 30 anos de mercado,
                temos os melhores preços para que você e sua família
                façam aquela viagem dos sonhos.
            </p>
            <p>
                Planejar uma viagem requer conhecimento, dedicação, confiança e paixão, 
                para proporcionar a você uma experiência única e incomparável!
            </p>

            <h2 className='title-infoArea'>Missão, Visão e Valores</h2>
            <p>
                Missão: Ser um time obstinado em prever e atender as necessidades dos clientes e consumidores sempre agregando valores.
            </p>
            <p>
               Visão: Ser a empresa líder em atender as necessidades dos clientes sempre agregando valores
            </p>
            <p>
               Valores:  honestidade, respeito e dedicação.
            </p>
        </section>
        <section className='descricao'>
            <h2 className='title-infoArea'>Empresa Número 1 Do Mercado </h2>
            <div className='card'>
                <div className='selo'>
                    <span className='numero'>1</span>
                </div>
            </div>
        </section>
        <section className='descricao'>
            <img src={cliente} className='cliente-svg'/>
        </section>
    </div>
  )
}

export default index;
