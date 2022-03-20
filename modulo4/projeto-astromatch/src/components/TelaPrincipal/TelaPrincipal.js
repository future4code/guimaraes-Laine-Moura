import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DivCard, DivBotoes, FotoPerfilImg, NomeP, IdadeP, BioP } from './StyledTelaPrincipal'

export const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/laine` 

const TelaPrincipal = (props) => {
  const [perfil, setPerfil] = useState([])

  const pegaPerfil = () => {
    axios
      .get(`${url}/person`)
      .then((res) => setPerfil(res.data.profile))
      .catch((err) => console.log(err))
  }

  useEffect(() => pegaPerfil(), [])

  const curtirPerfil = () => {
    const body = {
      id: perfil.id,
      choice: true,
    }

    axios
      .post(`${url}/choose-person`, body)
      .then((res) => pegaPerfil())
      .catch((err) => console.log(err))
  }

  const descurtirPerfil = () => {
    const body = {
      id: perfil.id,
      choice: false,
    }

    axios
      .post(`${url}/choose-person`, body)
      .then((res) => pegaPerfil())
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <DivCard>
        <FotoPerfilImg src={perfil.photo}/>
        <NomeP>{perfil.name}</NomeP>
        <br/>
        <IdadeP>{perfil.age}</IdadeP>
        <BioP>{perfil.bio}</BioP>
      </DivCard>
      <DivBotoes>
        <button onClick={curtirPerfil}>&#128293;</button>
        <button onClick={descurtirPerfil}>&#128078;</button>
        <br/>
        <br/>
        <button onClick={props.onChangeTelaMatch}>Ver matches</button>
      </DivBotoes>

    </div>
  )
}

export default TelaPrincipal;
