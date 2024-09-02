import React from 'react';
import { connect } from 'react-redux';

const Footer = ({ user }) => {
  // your JSX code here
};

const mapStateToProps = state => ({
  user: state.ui.get('user'),
});

export default connect(mapStateToProps)(Footer);
