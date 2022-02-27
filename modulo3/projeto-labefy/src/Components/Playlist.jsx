import React from 'react'
import axios from 'axios'
import Playlists from './Playlists'


const headers = {
    headers: {
        Authorization: 'laine-moura-guimaraes'
    }
}

export default class Playlist extends React.Component {
    state={
        playlists: [],
        page: false
    }
    login = () => this.setState({playlists: true})

    pegaPlaylist = () => {
        axios
            .get(this.props.urlTodasPlaylists, headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops!');
            })


    }
    abrePlaylist = (idPlaylist) => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`, headers)
        .then((res) => {
            this.setState({ playlists: res.data.quantity.tracks })
            console.log(res.data)
        })
        .catch((err) => {
            console.log('Ops!');
        })
    }
         
  render() {
      const playlistRenderizada = this.state.playlists.map((playlist)=>{
        <div key={playlist.id} >
    </div>
      })
    return (
      <div>
          Sua Playlist aqui
      </div>
    )
  }
}
