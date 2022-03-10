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
`

const UrlMusicaP = styled.p`
    text-align: center;
    cursor: pointer;
`

const BtnVoltar = styled.button`
    justify-self: center;
`


 export default class Playlist extends React.Component {
    state={
        playlists: [],
        exibePlaylist:[]
       
    }    
    
    abrePlaylist = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks`, headers)
            .then((res) => {
                this.setState({ exibePlaylist: res.data.result.tracks })
            })
            .catch((err) => { })

    }
    
    componentDidMount () {
        this.abrePlaylist()

    }

  render() {
    const playlistSelecRender = this.state.exibePlaylist.map((musica, i) => {
        return <div>
            <div key={musica.id}>
                <NomeMusicaP>{musica.name}</NomeMusicaP>
                <ArtistaMusicaP>{musica.artist}</ArtistaMusicaP>
                <UrlMusicaP>{musica.url}</UrlMusicaP>

            </div>
        </div>
    })


    return (
      <TelaDiv>
        {playlistSelecRender}
        
        <BtnVoltar onClick={this.props.renderizaPaginaPlaylist}>Voltar</BtnVoltar>
          
      </TelaDiv>
    )
  }
}


