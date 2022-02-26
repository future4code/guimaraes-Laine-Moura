import React from "react"
import Home from "./Components/Home"
export default class App extends React.Component {
  state={
    home: true
  }

  render() {
    let pagina = <h1>Página Erro</h1>;

      if (this.state.home) {
        pagina = <Home />;
      } 
    return (
      <div>
        {pagina}
      </div>
    )
  }
}

