import React from "react";
import axios from "axios";
import styled from "styled-components";
import Playlist from "./Playlist"

const urlCriaPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

const urlTodasPlaylists = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

export const headers = {
    headers: {
        Authorization: 'laine-moura-guimaraes'
    }
}

/*styled-components */

const StyledPlaylists = styled.div`
    display: flex;
`

const PlaylistP = styled.p`
    cursor: pointer;
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
    cursor: pointer;
  }
`

const ImgAddPlaylist = styled.img`
    width: 1vw;
    background: #757575;
   
`

/*fim do styled-components*/

export default class Playlists extends React.Component {
    state = {
        nome: '',
        playlists: [],
        detalhe: false,
        playlistSelecionada: '',
    }

    renderizaDetalhe = (mostraPlaylist) => {
        this.setState({detalhe: true, playlistSelecionada:  mostraPlaylist})
    }

    renderizaPaginaPlaylist = () => {
        this.setState({detalhe: false})
    }

    componentDidMount() {
        this.pegaPlaylist()
    }

    componentDidUpdate() {
        this.pegaPlaylist()
    }

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

    }

    pegaPlaylist = () => {
        axios
            .get(urlTodasPlaylists, headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
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
        if (this.state.detalhe) {
            return (
              <Playlist
              renderizaPaginaPlaylist={this.renderizaPaginaPlaylist}
              playlistSelecionada={this.state.playlistSelecionada}
              />
            );
          }


        const playlistsRenderizadas = this.state.playlists.map((playlist, i) => {
            return <StyledPlaylists>
                <PlaylistP key={playlist.id}>
                    {playlist.name}
                </PlaylistP>

                <BotaoExcluir
                    onClick={() => this.deletaPlaylist(playlist.id)}>x</BotaoExcluir>

                <button 
                onClick={() => this.renderizaDetalhe(playlist)}>Abrir</button>

            </StyledPlaylists>
        })


        return (
            <div>
                <input
                    type="text"
                    placeholder="Nome da Playlist"
                    value={this.state.nome}
                    onChange={this.pegaNomePlaylist} />

                <button
                    onClick={this.criaPlaylist}>
                    +</button>
                <br />



                {playlistsRenderizadas}
                {/* {playlistSelecRender} */}
                


            </div>
        )
    }
}
