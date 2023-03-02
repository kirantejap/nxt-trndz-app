import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', failureMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
    this.setState({failureMsg: ''})
  }

  onSubmitFailure = () => {
    const {username, password} = this.state
    if (username === '') {
      this.setState({failureMsg: '*Username is not found'})
    } else if (password === '') {
      this.setState({failureMsg: '*Enter Password'})
    } else {
      this.setState({failureMsg: "*Username and Password didn't match"})
    }
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  render() {
    const {username, password, failureMsg} = this.state

    return (
      <div className="login-bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="form-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="formContainer" onSubmit={this.submitForm}>
          <div className="label-input-container">
            <label className="label" htmlFor="usernameId">
              USERNAME
            </label>
            <div className="input-container">
              <input
                type="text"
                id="usernameId"
                placeholder="Username"
                className="inputElement"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
          </div>
          <div className="label-input-container">
            <label className="label" htmlFor="passwordId">
              PASSWORD
            </label>
            <div className="input-container">
              <input
                type="password"
                id="passwordId"
                placeholder="Password"
                className="inputElement"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
          <p className="error-msg">{failureMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
