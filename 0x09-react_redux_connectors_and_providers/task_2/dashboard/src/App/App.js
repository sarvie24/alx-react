import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

class App extends Component {
  render() {
    return (
      // your JSX code here
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(loginRequest(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
