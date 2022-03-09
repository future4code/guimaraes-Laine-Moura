import React from 'react'
import axios from 'axios'
import Playlists from './Playlists'


const headers = {
    headers: {
        Authorization: 'laine-moura-guimaraes'
    }
}

const urlTodasPlaylists = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'


 export default class Playlist extends React.Component {
    state={
        playlists: [],
        exibePlaylist:[]
       
    }

    
    // componentDidUpdate () {
        //     this.pegaPlaylist()
        // }

    pegaPlaylist = () => {
        axios
            .get(urlTodasPlaylists, headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.tracks })
                // console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops!');
            })


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
                <p>{musica.name}</p>
                <p>{musica.artist}</p>
                <p>{musica.url}</p>

            </div>
        </div>
    })


    return (
      <div>
        {playlistSelecRender}
        
        <button onClick={this.props.irParaPlaylists}>Voltar</button>
          
      </div>
    )
  }
}


