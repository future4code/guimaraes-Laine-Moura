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
  state={
    playlists: false
  }

  login = () => this.setState({playlists: true})

  render() {
    let pagina = <h1>Página Erro</h1>;

      if (this.state.playlists) {
        pagina = <Playlists />;
      } else {
        pagina = <Login onClickLogin={this.login}/>

      }
    return (
      <Body>
        <div>
          {pagina}
        </div>
      </Body>
    )
  }
}

