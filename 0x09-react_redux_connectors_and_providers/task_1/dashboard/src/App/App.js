import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActions';
import Drawer from '../Drawer/Drawer';
import Login from '../Login/Login';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <div>
            <button onClick={this.props.displayNotificationDrawer}>Display Drawer</button>
            <button onClick={this.props.hideNotificationDrawer}>Hide Drawer</button>
            {this.props.drawerOpen ? <Drawer /> : null}
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get('isLoggedIn'),
    drawerOpen: state.ui.get('isNotificationDrawerVisible'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  drawerOpen: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
