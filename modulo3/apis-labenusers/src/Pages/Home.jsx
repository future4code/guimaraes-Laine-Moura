import React from "react";
import axios from 'axios'

const urlCriaUsuario = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: 'laine-moura-guimaraes'
    }
}

export default class Home extends React.Component {
    state = {
        nomeInput: '',
        emailInput: '',
    };

    pegaNomeInput = (e) => {
        this.setState({ nomeInput: e.target.value })

    }

    pegaEmailInput = (e) => {
        this.setState({ emailInput: e.target.value })

    }
    criaUsuario = () => {
        const body = {
            name: this.state.nomeInput,
            email: this.state.emailInput
        };
        axios
            .post(urlCriaUsuario, body, headers)
            .then((res) => {
            alert('usuario adicionado com sucesso');
            this.setState({nomeInput: '', emailInput: ''})

            })
            .catch((err) => {
                console.log('errrou');
            });
    };



    render() {
        return (
            <div>
                <button onClick={this.props.onClickListando}>Trocar tela</button>
                <br />
                <br />
                <input type="text" placeholder="Nome" value={this.state.nomeInput} onChange={this.pegaNomeInput} />
                <input type="email" placeholder="email" value={this.state.emailInput} onChange={this.pegaEmailInput} />
                <button onClick={this.criaUsuario}>Criar Usuário</button>
            </div>
        );
    }
}
