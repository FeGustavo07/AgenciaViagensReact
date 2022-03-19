import {React, useRef } from 'react'
import './atualizar.css'
import api from '../../services/api';

export default () => {

const id = useRef()
const nome = useRef();
const preco = useRef();
const descricao = useRef();
const linkImagem = useRef();

function atualizarDestino(event) {
    event.preventDefault();
    console.log(id ,nome, preco, descricao, linkImagem)
    api.patch(`/destinos/${id.current.value}`, {

      id: id.current.value,
      nome: nome.current.value,
      // nome: nome.current.value !== '' ? nome.current.value : api.get,
      preco: preco.current.value,
      descricao: descricao.current.value,
      linkImagem: linkImagem.current.value,

    }).then(res => window.location.reload())
    .catch(err => console.log(err))
}


  return (
    <div className='body-form'>
        <h2>Atualizar Destino</h2>
        <form action='patch' onSubmit={atualizarDestino} className='form-gerenciamento'>
            <input type="number" placeholder='Id'  ref={id} required />
            <input type="text" placeholder='Nome' ref={nome} />
            <input type="number" placeholder='Valor' ref={preco} />
            <input type="text" placeholder='Descrição'ref={descricao} />
            <input type="text" placeholder='Link da imagem' ref={linkImagem} />
            <button className='btn-gerenciamento' type='submit'>ATUALIZAR</button>
        </form>
    </div>
  )
}

