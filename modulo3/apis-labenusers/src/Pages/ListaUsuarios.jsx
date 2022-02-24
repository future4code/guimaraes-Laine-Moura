import React from "react";

export default class ListaUsuarios extends React.Component {
    render() {
     return (
      <div>
        <h1>Listando...</h1>
        <button onClick={this.props.onClickHome}>Trocar tela</button>
      </div>
    );
  }}

