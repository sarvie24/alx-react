import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    this.checkEnableSubmit();
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    this.checkEnableSubmit();
  }

  checkEnableSubmit() {
    const { email, password } = this.state;
    if (email !== '' && password !== '') {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleChangeEmail}
          placeholder="Email"
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChangePassword}
          placeholder="Password"
        />
        <input
          type="submit"
          value="Login"
          disabled={!this.state.enableSubmit}
        />
      </form>
    );
  }
}

export default Login;
