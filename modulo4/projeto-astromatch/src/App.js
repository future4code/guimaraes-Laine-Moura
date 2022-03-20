import React, {useState,useEffect} from 'react'
import axios from 'axios';
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal'
import TelaMatch from './components/TelaMatch/TelaMatch';

const App = () => {
  const [telaExibida, setTelaExibida] = useState('perfil')

  const escolheTela = () => {
    switch (telaExibida) {
      case 'perfil':
        return <TelaPrincipal onChangeTelaMatch = {onChangeTelaMatch}/> 
      case 'match':
        return <TelaMatch onChangeTelaPrincipal = {onChangeTelaPrincipal}/>
        return <p> Oppps! </p>;
    }
  }

  const onChangeTelaPrincipal = () => setTelaExibida('perfil')
  const onChangeTelaMatch = () => setTelaExibida('match')


  return(
    <div > 
      {escolheTela()} 
    </div>
  );
}

export default App;