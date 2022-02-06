import React from 'react'
import styled from 'styled-components'



const Body = styled.body`
margin: 0;
padding: 0;
background-color: #282c34;
overflow: auto

`

const Main = styled.main`
margin: 0;
padding: 0;
background-color: #282c34;
min-height: 100vh;
color: white;


`

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 3fr 6fr 1fr;
  position: fixed;
  bottom: 0;

  @media screen and (max-width: 375px) {
   height: 30px;
  }

`

const Input = styled.input`
  font-family: Arial;
  width: 30vw
`
const InputMsg = styled.input`
  font-family: Arial;
  width: 51vw;

`

const Button = styled.button`
  color: #282c34;
`

const Chat = styled.div`
color:white;
background-color: #282c34;
`

class App extends React.Component {

  state = {
    enviarInputs: [],
    valorUser: '',
    valorMsg: '',
  };
  
  onClickEnviar = () => {
    const novaMensagem = {
      nome: this.state.valorUser,
      mensagem: this.state.valorMsg,
    };
    const enviarMensagens = [...this.state.enviarInputs, novaMensagem];
    this.setState({enviarInputs: enviarMensagens})

    this.setState({valorUser: ''})
    this.setState({valorMsg: ''})
  
  };

  onChangeUser = (e) => {
    this.setState({valorUser: e.target.value})
  };

  onChangeMsg = (e) => {
    this.setState({valorMsg: e.target.value})
  }


render() {
  const envioMensagemMap  = this.state.enviarInputs.map((enviando) => {
    return <Chat><p>{enviando.nome}:</p><p>{enviando.mensagem}</p></Chat>


  });
  return (
    <Body>
      <Main>
        {envioMensagemMap}
      </Main>
        <Footer>
          <Input
          value={this.state.valorUser}
          onChange={this.onChangeUser}
          placeholder={'Digite seu nome'}
          />
          <InputMsg
          value={this.state.valorMsg}
          onChange={this.onChangeMsg}
          placeholder={'Digite sua mensagem aqui'}
          />
          <Button onClick={this.onClickEnviar}>Enviar</Button>
        </Footer>
    </Body>

    
  );
}
}

export default App;

