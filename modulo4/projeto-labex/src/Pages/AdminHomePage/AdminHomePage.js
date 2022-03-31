import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

const navigate = useNavigate()
const goToHomePage = () => navigate(-2) /* corrigir */
const createTrip = () => navigate('createTrip')


  return (
    <div>
      <p>AdminHomePage</p>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={createTrip}>Criar Viagem</button>
      <button onClick={goToHomePage}>Logout</button>

      <p>viagem aqui</p>

    </div>
  )
}
