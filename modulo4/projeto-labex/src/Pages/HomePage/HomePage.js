import React from 'react'
import { useNavigate } from 'react-router-dom'
import {ContainerPrincipal} from './StyledHomePage'

export default function HomePage() {

const navigate = useNavigate()
const goToLogin = () => navigate('/login')
const goToListTripPage = () => navigate('listTrips')

  return (
    <ContainerPrincipal>
      <p>Home</p>
      <button onClick={goToListTripPage}>Ver Viagens</button>
      <button onClick={goToLogin}>Área de Admin</button>
    </ContainerPrincipal>
  )
}
