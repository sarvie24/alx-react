import React, { useContext } from 'react';
import AppContext from '../../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <footer>
      <p>&copy; 2023 Dashboard</p>
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
