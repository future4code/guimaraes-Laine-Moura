import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { BotaoExcluir } from './Playlists'

const headers = {
    headers: {
        Authorization: 'laine-moura-guimaraes'
    }
}

const urlTodasPlaylists = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

/*styled components */

const TelaDiv = styled.div`
    text-align: center;
    margin: 0 auto;
    padding: 0 0;
    background: #191414;
    height: 100vh;
`

const InputsDiv = styled.div`
    margin: 0 auto 2vh;
    border: 1px solid #1DB954;
    width: min-content;
`

const NomeMusicaP = styled.p`
    color: white;
    text-align: center;
    margin: 0 0;
`

const ArtistaMusicaP = styled.p`
    text-align: center;
    color: #1DB954;
    margin: 0 0;
    padding: 0 1vw;
`

const PlayAudio = styled.audio`
    margin: 0 0;
    text-align: center;
    cursor: pointer;
    width: 15%;
    height: 4vh;
`

const PlayAudioSource = styled.source`
    color: red;
`

const CardMusicaDiv = styled.div`
    display: flex;
    place-content: center;
    padding: 2vh 0;
`

const PlaylistDiv = styled.div`
    margin: 20vh auto 10vh;
`

const BtnAdicionarMusica = styled.button`
    justify-self: center;
    background: #1DB954;
    border-radius: 5%;
    border: 0;
    cursor: pointer;
`

const BtnVoltar = styled.button`
    justify-self: center;
    background: #1DB954;
    border-radius: 5%;
    border: 0;
    cursor: pointer;
`


 export default class Playlist extends React.Component {
    state={
        exibePlaylist:[],
        name: '', 
        artist: '',
        url: '',
       
    }  
    
    pegaNomeMusica = (e) => {
        this.setState({ name: e.target.value })

    }
    pegaArtistaMusica = (e) => {
        this.setState({ artist: e.target.value })

    }
    pegaUrlMusica = (e) => {
        this.setState({ url: e.target.value })

    }
    
    abrePlaylist = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks`, headers)
            .then((res) => {
                this.setState({ exibePlaylist: res.data.result.tracks })
            })
            .catch((err) => { })

    }

    criaMusica = () => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url,
        }

    
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks`, body,headers)
    .then((res) => {
        this.setState({ name: '', artist: '', url: '' });
        this.abrePlaylist();
      })
      .catch((err) => {
        console.log(err);
      });
  };
    
    componentDidMount () {
        this.abrePlaylist()
    }
    componentDidUpdate () {
        this.abrePlaylist()
    }

    deletaMusica = (musica) => {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks/${musica}`, headers)
        .then((res) => console.log(musica))
        .catch((err) => console.log(musica))

    }

  render() {
    const playlistRenderizada = this.state.exibePlaylist.map((musica, i) => {
        return <div>
            <CardMusicaDiv key={musica.id}>
                <NomeMusicaP>{musica.name}</NomeMusicaP>
                <ArtistaMusicaP>{musica.artist}</ArtistaMusicaP>
                <PlayAudio controls >
                    <PlayAudioSource src={musica.url} type={'audio/mp3'}></PlayAudioSource>
                </PlayAudio> 
                <BotaoExcluir
                    onClick={() => {if(window.confirm('Deletar Música?')) {this.deletaMusica(musica.id)}}}> x
                </BotaoExcluir>

            </CardMusicaDiv>
        </div>
    })


    return (
      <TelaDiv>
           <InputsDiv>
               <input
                        type="text"
                        placeholder="Nome da Música"
                        value={this.state.name}
                        onChange={this.pegaNomeMusica} />
                <br/>
                <input
                        type="text"
                        placeholder="Nome do Artista"
                        value={this.state.artist}
                        onChange={this.pegaArtistaMusica} />
                <br/>
               
                <input
                        type="text"
                        placeholder="Url"
                        value={this.state.url}
                        onChange={this.pegaUrlMusica} />
                <br/>
           </InputsDiv>

            <BtnAdicionarMusica onClick={this.criaMusica}>Adicionar Música</BtnAdicionarMusica>
            <br/>
            <br/>


        <PlaylistDiv>{playlistRenderizada}</PlaylistDiv>

        <br/>
        <br/>
        
        <BtnVoltar onClick={this.props.renderizaPaginaPlaylist}>Voltar</BtnVoltar>
          
      </TelaDiv>
    )
  }
}


