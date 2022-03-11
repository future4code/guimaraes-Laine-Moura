import React from 'react'
import styled from 'styled-components'
import backgroundinicial from '../assets/backgroundinicial.jpg'


const Body = styled.body`
  height: 100vh;
  background-image: url(${backgroundinicial});
  background-size: cover;
  text-align: center;
   margin: 0 auto;
  height: 100vh;
`

const DivLogin = styled.div`
  width: 100vw;
  display: grid;
  justify-self: center;
  align-self: center;
`

const MsgP = styled.p`
  display: flex;
  font-size: 2rem;
  margin: 30vh auto 0;
  color: gray;
`

const BtnClickLogin = styled.button`
  display: flex;
  margin: 5vh auto 0;
  color: #464646;
`


export default class Login extends React.Component {
  render() {
    return (
      <Body>
        <DivLogin>
          <MsgP>Bem-vind@ ao Labefy!</MsgP>
            <BtnClickLogin onClick={this.props.irParaPlaylists}>Login</BtnClickLogin>
        </DivLogin>
      </Body>
    )
  }
}
