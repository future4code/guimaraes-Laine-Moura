import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ApplicationFormPage() {

const navigate = useNavigate()
const goToHomePage = () => navigate(-1)
  return (
    <div>
      <p>ApplicationFormPage</p>
      
      <div>
          <input />
          <input />
          <input />
          <input />
          <input />

      </div>

      <button onClick={goToHomePage}>Voltar</button>
      <button>Enviar</button>
     



    </div>
  )
}