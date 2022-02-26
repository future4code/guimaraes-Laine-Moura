import React from "react";
import axios from "axios";

const urlCriaPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

const headers = {
    headers: {
        Authorization: 'laine-moura-guimaraes'
    }
}

export default class Home extends React.Component {
    state={
        nome:''
    }

    criaPlaylist = () => {
        const body = {
            name:this.state.nome
        }
        axios
            .post(urlCriaPlaylist, body, headers)
            .then((res)=> {
                alert('Playlist criada com sucesso!')
                this.setState({nome: ''})
            })
            .catch((err)=> {alert('Algo não está certo!');}) 
    }

    pegaNomePlaylist = (e) => {
        this.setState({nome: e.target.value})
        console.log(this.state.nome);
        
    }
  render() {
    return (
      <div>
          <input type="text" placeholder="Nome da Playlist" value={this.state.nome} onChange={this.pegaNomePlaylist}/>
          <button onClick={this.criaPlaylist}>Criar Playlist</button>
      </div>
    )
  }
}
