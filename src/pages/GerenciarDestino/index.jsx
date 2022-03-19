import {React} from 'react'
import './gerenciarDestino.css'
import Cadastrar from '../../components/CadastrarDestino'
import Atualizar from '../../components/AtualizarDestino'
import Deletar from '../../components/DeletarDestino'
import Listar from '../../components/ListarDestinos'
import { useAuth0 } from '@auth0/auth0-react'

function CadastroDestino() {

  const { user, isAuthenticated } = useAuth0()

  return (

    isAuthenticated && user.sub == "google-oauth2|102126342599734069744" && (
      <div className='body-gerenciamentoDestino'>
        <Cadastrar />
        <Atualizar />
        <Deletar />
        <Listar />
      </div>
    )
  )
}

export default CadastroDestino;