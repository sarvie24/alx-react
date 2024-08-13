import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';

const App = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });
  const [logOut, setLogOut] = useState(() => {});

  const logIn = (email, password) => {
    setUser({ email, password, isLoggedIn: true });
  };

  const handleLogOut = () => {
    setUser({ email: '', password: '', isLoggedIn: false });
  };

  useEffect(() => {
    setLogOut(handleLogOut);
  }, []);

  return (
    <AppContext.Provider value={{ user, logOut }}>
      <Header />
      {user.isLoggedIn ? <CourseList /> : <Login logIn={logIn} />}
    </AppContext.Provider>
  );
};

export default App;
