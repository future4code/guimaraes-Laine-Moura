import React, { useState } from 'react'
import axios from 'axios';
import Lista from './Pages/Lista/Lista'
import AdminHomePage from './Pages/AdminHomePage/AdminHomePage'
import HomePage from './Pages/HomePage/HomePage';

const App = () => {

  const [tela, setTela] = useState('home')

  const escolheTela = () => {
  switch (tela) {
    case 'home':
      return <HomePage/>
    case 'lista':
      return <Lista onChangeTelaAdmin={onChangeTelaAdmin}/>
    case 'admin':
      return <AdminHomePage onChangeTelaLista={onChangeTelaLista}/>
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