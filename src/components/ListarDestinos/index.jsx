import React, { useState, useEffect } from 'react'
import './listar.css'
import api from '../../services/api'

export default () => {

    const [destinos, setDestinos] = useState([])

    useEffect(() => {
        api.get("/destinos").then(({ data }) => {
            setDestinos(data)
        })
      }, []);
      console.log(destinos)

  return (
    <div className='body-form'>
        <h2>Lista De Destinos</h2>
        {
            destinos?.map((destino) => (
                         
                <table className='tabela--destinos'>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                    </tr>
                    <tr key={destino.id}>
                        <td>{destino.id}</td>
                        <td>{destino.nome}</td>
                    </tr>
                </table>

            ))
        }
    </div>
  )
}

