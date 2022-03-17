import React from "react"
import Playlists from "./Components/Playlists"
import Login from "./Components/Login";
import styled from "styled-components";


const Body = styled.body`
  margin: 0;
  padding: 0;
  background: #696969;
  width: 100vw;
  height: 100vh;
`

export default class App extends React.Component {
  state = {
    tela: "login"
  }

  escolheTela = () => {
    switch(this.state.tela){
       case "login":
         return <Login irParaPlaylists={this.irParaPlaylists}/>
       case "playlists":
         return <Playlists />
        default:
          return <p>Opa, algo deu errado</p>
    }
  }

  irParaPlaylists = () => {
    this.setState({tela: "playlists"})
  }

  render(){
  return (
    <Body>
      {this.escolheTela()}
    </Body>
  );
  }
}