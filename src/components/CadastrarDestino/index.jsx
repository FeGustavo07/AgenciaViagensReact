import {React, useRef } from 'react'
import './cadastrar.css'
import api from '../../services/api';

export default () => {

const nome = useRef();
const preco = useRef();
const descricao = useRef();
const linkImagem = useRef();

function enviarDestino(event) {
    event.preventDefault();
    console.log(nome, preco, descricao, linkImagem)
    api.post('/destinos', {
        nome: nome.current.value,
        preco: preco.current.value,
        descricao: descricao.current.value,
        linkImagem: linkImagem.current.value,
    }).then(res => window.location.reload())
    .catch(err => console.log(err))
    }


  return (
    <div className='body-form'>
        <h2>Cadastrar Destino</h2>
        <form action='post' onSubmit={enviarDestino} className='form-gerenciamento'>
            <input type="text" placeholder='Nome' ref={nome} required />
            <input type="number" placeholder='Valor' ref={preco} required />
            <input type="text" placeholder='Descrição' ref={descricao} required />
            <input type="text" placeholder='Link da imagem' ref={linkImagem} required />
            <button className='btn-gerenciamento' type='submit'>CADASTRAR</button>
        </form>
    </div>
  )
}

