import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

const navigate = useNavigate()
const goToLogin = () => navigate('/login')
  return (
    <div>
      <p>LoginPage</p>
      <input type={'email'}/>
      <input type={'password'}/>
      <br/>
      <br/>
      <button>Voltar</button>
      <button>Login</button>



    </div>
  )
}
