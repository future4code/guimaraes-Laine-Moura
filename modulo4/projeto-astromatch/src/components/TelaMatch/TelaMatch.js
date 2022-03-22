import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { url } from '../TelaPrincipal/TelaPrincipal'
import {DivContainer, DivMatch, FotoMiniaturaImg, MatchNameP, MatchAgeP, BtnVoltar} from './StyledTelaMatch'


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
          <DivContainer>
            <DivMatch>
              <FotoMiniaturaImg src={match.photo}/>
              <MatchNameP>{match.name}</MatchNameP>
              <MatchAgeP>{match.age}</MatchAgeP>
            </DivMatch>
          </DivContainer>

        )
      })}
      <br/>
      <BtnVoltar onClick={props.onChangeTelaPrincipal}>Voltar</BtnVoltar>
    </div>
  )
}

export default TelaMatch
