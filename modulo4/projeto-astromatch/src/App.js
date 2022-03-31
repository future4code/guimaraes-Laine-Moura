import React, {useState} from 'react'
import axios from 'axios';
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal'
import TelaMatch from './components/TelaMatch/TelaMatch';
import { url } from './components/TelaPrincipal/TelaPrincipal';
import { BtnLimpar } from './components/TelaPrincipal/StyledTelaPrincipal';

const App = () => {
  const [telaExibida, setTelaExibida] = useState('principal')

  const escolheTela = () => {
    switch (telaExibida) {
      case 'principal':
        return <TelaPrincipal onChangeTelaMatch = {onChangeTelaMatch}/> 
      case 'match':
        return <TelaMatch onChangeTelaPrincipal = {onChangeTelaPrincipal}/>
      default:
        <p> Oppps! </p>;
    }
  }

  const onChangeTelaPrincipal = () => setTelaExibida('principal')
  const onChangeTelaMatch = () => setTelaExibida('match')

  const deletaMatch = () => {
    axios
      .put(`${url}/clear`)
      .then((res) => setTelaExibida('principal'))
      .catch((err) => console.log(err))
  }


  return(
    <div > 
      {escolheTela()}
      <br/>
      <BtnLimpar onClick={deletaMatch}>Limpar Matches</BtnLimpar>
    </div>
  );
}

export default App;