import React from "react";
import axios from "axios";
import styled from "styled-components";
import soma from '../assets/soma.png'
import Playlist from "./Playlist";

const urlCriaPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
export const urlTodasPlaylists = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

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
        playlistPag: ''
    }

    irParaPlaylist = () => {
        this.setState({page:'playlist'})
    }

    componentDidMount () {
        this.pegaPlaylist()
    }

    componentDidUpdate () {
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

    // abrePlaylist = (idPlaylist) => {
    //     axios
    //     .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`, headers)
    //     .then((res) => {
    //         this.setState({ playlists: res.data.result.list })
    //         console.log(res.data)
    //     })
    //     .catch((err)=>{})
            
    //}

    render() {
        
        let secao;

        switch (this.state.page) {
            case 'playlist':
                secao=<Playlist/>;
                break;
            default:
                secao =<p>Nenhuma secao selecionada</p>
                break;
        }

        const playlistsRenderizadas = this.state.playlists.map((playlist) => {
            return <StyledPlaylists>
                <PlaylistP key={playlist.id} onClick={this.irParaPlaylist}>
                    {playlist.name}
                </PlaylistP>

                <BotaoExcluir 
                onClick={() => this.deletaPlaylist(playlist.id)}>x</BotaoExcluir>
                {playlist.id}

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
                <ImgAddPlaylist src={soma}></ImgAddPlaylist></button>
                <br />
                
                {playlistsRenderizadas}
                {secao}

            </div>
        )
    }
}
