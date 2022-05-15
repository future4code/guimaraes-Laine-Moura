import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { url } from '../../App'

export default function LoginPage() {

const navigate = useNavigate()
const goToHomePage = () => navigate('/')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const handleEmail = (e) => setEmail(e.target.value) 
const handlePassword = (e) => setPassword(e.target.value) 

const login = () => {
  const body = {
    email: email,
    password: password
  }
  axios
    .post(`${url}/login`, body)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      navigate('/admin/trips/list')
    })
    .catch((err) => err.response)
}

  return (
    <div>
      <p>LoginPage</p>
        <input type={'email'} placeholder={'Nome'} value={email} onChange={handleEmail} required/>
        <input type={'password'} placeholder={'Senha'} value={password} onChange={handlePassword} required/>
        <br/>
      <br/>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={login}>Login</button>



    </div>
  )
}
