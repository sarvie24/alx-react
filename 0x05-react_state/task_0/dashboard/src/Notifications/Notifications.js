import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) => {
  return (
    <div>
      <button onClick={handleDisplayDrawer}>Your notifications</button>
      {displayDrawer && (
        <div>
          <button onClick={handleHideDrawer}>Close</button>
          <!-- notifications content -->
        </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
