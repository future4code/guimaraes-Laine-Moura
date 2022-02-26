import React from "react";
import Home from "./Pages/Home";
import ListaUsuarios from './Pages/ListaUsuarios'
import axios from 'axios'



export default class App extends React.Component {
  state = {
    listando: false
  };

    naLista = () => {
      this.setState({ listando: true });
    };
  
    naHome = () => {
      this.setState({ listando: false });
    };
  
    render() {
      let pagina = <h1>Página Erro</h1>;
  
      if (this.state.listando) {
        pagina = <ListaUsuarios onClickHome={this.naHome} />;
      } else {
        pagina = <Home onClickListando={this.naLista} />;
      }
    return (
      <div>
        {pagina}

        
      </div>
    );
  }
}
