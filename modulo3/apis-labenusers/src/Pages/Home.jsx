import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickListando}>Trocar tela</button>
        <br/>
        <br/>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="email"/>
        <button>Criar Usuário</button>
      </div>
    );
  }
}
