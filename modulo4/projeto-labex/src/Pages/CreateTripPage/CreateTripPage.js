import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateTriPage() {

const navigate = useNavigate()
const goToAdminHomePage = () => navigate(-1)
  return (
    <div>
      <p>Create trip</p>
      <input />
      <input />
      <input />
      <input />
      <input />
      <br/>
      <br/>
      <button onClick={goToAdminHomePage}>Voltar</button>



    </div>
  )
}
