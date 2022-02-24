import React from "react";
import Home from "./Pages/Home";
import ListaUsuarios from './Pages/ListaUsuarios'

export default class App extends React.Component {
  state = {
    login: false
  };

  listandoUsuarios = () => {
    this.setState({ login: true });
  };

  naHome = () => {
    this.setState({ login: false });
  };

  render() {
    let pagina = <h1>Página Erro</h1>;

    if (this.state.login) {
      pagina = <ListaUsuarios onClickHome={this.naHome}/>;
    } else {
      pagina = <Home onClickListando={this.listandoUsuarios} />;
    }
    return (
      <div className="App">
        {pagina}
      </div>
    );
  }
}
