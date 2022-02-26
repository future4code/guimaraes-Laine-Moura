import React from "react"
import Playlists from "./Components/Playlists"
import styled from "styled-components";
export default class App extends React.Component {
  state={
    playlists: true
  }

  render() {
    let pagina = <h1>Página Erro</h1>;

      if (this.state.playlists) {
        pagina = <Playlists />;
      } 
    return (
      <div>
        {pagina}
      </div>
    )
  }
}

