import {React, useRef} from 'react'
import './deletar.css'
import api from '../../services/api';

export default () => {

const id = useRef()

function excluirDestino(event) {
    event.preventDefault();
    console.log(id)
    api.delete(`/destinos/${id.current.value}`, {
      id: id.current.value,
    }).then(res => window.location.reload())
    .catch(err => console.log(err))
}


  return (
    <div className='body-form'>
        <h2>Excluir Destino</h2>
        <form onSubmit={excluirDestino} className='form-gerenciamento'>
            <input type="number" placeholder='Id' ref={id} required />
            <button className='btn-gerenciamento' type='submit'>EXCLUIR</button>
        </form>
    </div>
  )
}