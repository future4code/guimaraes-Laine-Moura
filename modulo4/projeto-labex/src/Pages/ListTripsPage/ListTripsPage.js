import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ListTripsPage() {

const navigate = useNavigate()
const goToHomePage = () => navigate(-1)
const applicationToTrip = () => navigate('applicationToTrip')
  return (
    <div>
      <p>ListTripPage</p>
      
      <div>
          <p>Viagem</p>
      </div>

      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={applicationToTrip}>Inscrição</button>



    </div>
  )
}
