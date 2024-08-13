import React, { useContext } from 'react';
import AppContext from '../../App/AppContext';

const Header = () => {
  const { user, logOut } = useContext(AppContext);

  return (
    <header>
      <h1>Dashboard</h1>
      {user.isLoggedIn && (
        <p id="logoutSection">
          Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
        </p>
      )}
    </header>
  );
};

export default Header;
