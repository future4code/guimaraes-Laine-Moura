import React from "react";
import axios from 'axios'
import styled from 'styled-components'

const Usuario = styled.div`
  display: flex;
`
const BotaoExcluir = styled.button`
  display: inline-flex;
  border:0;
  padding: 0 auto;
  margin: auto 1vw;
  color: #525252;

  &:hover {
    transform: scale(1.2);
    color: #757575;
    font-weight: 900;
    
  }
`


export default class ListaUsuarios extends React.Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegaUsuario()
  }

  pegaUsuario = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
          headers: {
            Authorization: 'laine-moura-guimaraes'
          }
        }
      )
      .then((res) => {
        this.setState({ usuarios: res.data })
        console.log(res.data)
      })
      .catch((err) => {
        console.log('errrou');
      })
  };

  deletaUsuario = (idUsuario) => {
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
        {
          headers: {
            Authorization: 'laine-moura-guimaraes'
          }
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response))
  }

  render() {
    const usuariosRenderizados = this.state.usuarios.map((usuario) => {
      return <Usuario>
        <p key={usuario.id}>{usuario.name}</p><BotaoExcluir onClick={() => this.deletaUsuario(usuario.id)}>x</BotaoExcluir>
      </Usuario>
    })
    return (
      <div>
        <button onClick={this.props.onClickHome}>Trocar tela</button>
        <h1>Listando...</h1>
        {usuariosRenderizados}

      </div>
    );
  }
}

