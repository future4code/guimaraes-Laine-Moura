import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ListTripPage() {

const navigate = useNavigate()
const goToListTripPage = () => navigate('listTrips')
  return (
    <div>
      <p>LoginPage</p>
      <input type={'email'}/>
      <input type={'password'}/>
      <br/>
      <br/>
      <button onClick={goToListTripPage}>Voltar</button>
      <button>Login</button>



    </div>
  )
}
