import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <div>
          <button onClick={this.props.onClickLogin}>Login</button>
      </div>
    )
  }
}
