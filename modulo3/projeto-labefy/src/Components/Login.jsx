import React from 'react'
import styled from 'styled-components'


const DivLogin = styled.div`
  width: 100vw;
  display: grid;
  justify-self: center;
  align-self: center;
`

const MsgP = styled.p`
  display: flex;
  margin: 40vh auto 0;
  color: #27db27;
`

const BtnClickLogin = styled.button`
  display: flex;
  margin: 5vh auto 0;
  color: #464646;
`


export default class Login extends React.Component {
  render() {
    return (
      <DivLogin>
        <MsgP>Bem-vind@ ao Labefy!</MsgP>
          <BtnClickLogin onClick={this.props.irParaPlaylists}>Login</BtnClickLogin>
      </DivLogin>
    )
  }
}
