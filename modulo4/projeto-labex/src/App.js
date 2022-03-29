import React, { useState } from 'react'
import axios from 'axios';
import Lista from './Pages/Lista/Lista'
import Administacao from './Pages/Administracao/Administracao'
import Home from './Pages/Home/Home'

const App = () => {

  const [tela, setTela] = useState('home')

  const escolheTela = () => {
  switch (tela) {
    case 'home':
      return <Home/>
    case 'lista':
      return <Lista onChangeTelaAdmin={onChangeTelaAdmin}/>
    case 'admin':
      return <Administacao onChangeTelaLista={onChangeTelaLista}/>
    default:
      <p>Opppps</p>
      break;
  }
}

const onChangeTelaAdmin = () => setTela('admin')
const onChangeTelaLista = () => setTela('lista')




  return (
    <>
      <div>{escolheTela()}</div>
      <button onClick={onChangeTelaAdmin}>Tela Admin</button>
      <button onClick={onChangeTelaLista}>Lista</button>
    </>
  )
}
export default App;