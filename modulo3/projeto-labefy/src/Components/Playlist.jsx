import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


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
    `

const NomeMusicaP = styled.p`
    color: white;
    text-align: center;
    margin: 0 0;
`

const ArtistaMusicaP = styled.p`
    text-align: center;
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

const BtnVoltar = styled.button`
    justify-self: center;
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

  render() {
    const playlistRenderizada = this.state.exibePlaylist.map((musica, i) => {
        return <div>
            <CardMusicaDiv key={musica.id}>
                <NomeMusicaP>{musica.name}</NomeMusicaP>
                <ArtistaMusicaP>{musica.artist}</ArtistaMusicaP>
                <PlayAudio controls >
                    <PlayAudioSource src={musica.url} type={'audio/mp3'}></PlayAudioSource>
                </PlayAudio> 

            </CardMusicaDiv>
        </div>
    })


    return (
      <TelaDiv>
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

            <button onClick={this.criaMusica}>Adicionar Música</button>
            <br/>
            <br/>


        {playlistRenderizada}

        <br/>
        <br/>
        
        <BtnVoltar onClick={this.props.renderizaPaginaPlaylist}>Voltar</BtnVoltar>
          
      </TelaDiv>
    )
  }
}


