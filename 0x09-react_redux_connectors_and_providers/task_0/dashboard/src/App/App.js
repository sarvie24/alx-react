// App/App.js
import React from 'react';
import { connect } from 'react-redux';
import uiReducer from '../../reducers/uiReducer';

const App = ({ isLoggedIn }) => {
  // Your component code here
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
