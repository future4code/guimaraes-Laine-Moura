import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

const navigate = useNavigate()
const goToHomePage = () => navigate(-1)
  return (
    <div>
      <p>LoginPage</p>
      <input type={'email'}/>
      <input type={'password'}/>
      <br/>
      <br/>
      <button onClick={goToHomePage}>Voltar</button>
      <button>Login</button>



    </div>
  )
}
