import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { url } from '../TelaPrincipal/TelaPrincipal'

const TelaMatch = (props) => {
  const [listaMatches, setListaMatches] = useState([])

  const pegaMatches = () => {
    axios
      .get(`${url}/matches`)
      .then((res) => setListaMatches(res.data.matches))
      .catch((err) => console.log(err))
  }

  useEffect(() => pegaMatches(), [])

  return (
    <div>
      {listaMatches.map((match) => {
        return (
          <img width={'100vw'}src={match.photo}/>

        )
      })}
      <br/>
      <button onClick={props.onChangeTelaPrincipal}>Voltar</button>
    </div>
  )
}

export default TelaMatch
