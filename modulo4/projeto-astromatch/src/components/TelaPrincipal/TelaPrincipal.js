import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
      <div>
        <img width={'100vw'} src={perfil.photo}></img>
        <p>{perfil.name}</p>
        <p>{perfil.age}</p>
        <p>{perfil.bio}</p>
      </div>
      <button onClick={curtirPerfil}>Curtir</button>
      <button onClick={descurtirPerfil}>Descurtir</button>

    </div>
  )
}

export default TelaPrincipal;
