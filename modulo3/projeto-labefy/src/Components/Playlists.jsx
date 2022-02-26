import React from "react";
import axios from "axios";
import styled from "styled-components";

const urlCriaPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const urlTodasPlaylists = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

const headers = {
    headers: {
        Authorization: 'laine-moura-guimaraes'
    }
}

/*styled-components */

const StyledPlaylists = styled.div`
    display: flex;
`
const BotaoExcluir = styled.button`
  display: inline-flex;
  border:0;
  padding: 0 auto;
  margin: auto 1vw;
  color: #525252;
  &:hover {
    transform: scale(1.3);
    color: #757575;
    font-weight: 900;
    cursor: pointer 
  }
`

/*fim do styled-components*/

export default class Playlists extends React.Component {
    state = {
        nome: '',
        playlists: []
    }

    componentDidMount () {
        this.pegaPlaylist()
    }

    // componentDidUpdate () {
    //     this.pegaPlaylist()
    // }

    criaPlaylist = () => {
        const body = {
            name: this.state.nome
        }
        axios
            .post(urlCriaPlaylist, body, headers)
            .then((res) => {
                alert('Playlist criada com sucesso!')
                this.setState({ nome: '' })
            })
            .catch((err) => { alert('Algo não está certo!'); })
    }

    pegaNomePlaylist = (e) => {
        this.setState({ nome: e.target.value })
        console.log(this.state.nome);

    }



    pegaPlaylist = () => {
        axios
            .get(urlTodasPlaylists, headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops!');
            })


    }

    deletaPlaylist = (idPlaylist) => {
        axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,
          headers
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err.response))
      }

    render() {
        const playlistsRenderizadas = this.state.playlists.map((playlist) => {
            return <StyledPlaylists>
                <p key={playlist.id}>{playlist.name}</p><BotaoExcluir onClick={() => this.deletaPlaylist(playlist.id)}>x</BotaoExcluir>
            </StyledPlaylists>
        })
        return (
            <div>
                <input type="text" placeholder="Nome da Playlist" value={this.state.nome} onChange={this.pegaNomePlaylist} />
                <button onClick={this.criaPlaylist}>Criar Playlist</button>
                <br />
                
                {playlistsRenderizadas}

            </div>
        )
    }
}
