import React, { useState } from 'react';
import AppContext from './AppContext';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

const App = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });
  const [listNotifications, setListNotifications] = useState([]);
  const [logOut, setLogOut] = useState(() => {});

  const logIn = (email, password) => {
    setUser({ email, password, isLoggedIn: true });
  };

  const handleLogOut = () => {
    setUser({ email: '', password: '', isLoggedIn: false });
  };

  const markNotificationAsRead = (id) => {
    setListNotifications(listNotifications.filter((notification) => notification.id !== id));
  };

  useEffect(() => {
    setLogOut(handleLogOut);
  }, []);

  return (
    <AppContext.Provider value={{ user, logOut, listNotifications, markNotificationAsRead }}>
      <Footer />
      {user.isLoggedIn ? <CourseList /> : <Login logIn={logIn} />}
      <Notifications listNotifications={listNotifications} markNotificationAsRead={markNotificationAsRead} />
    </AppContext.Provider>
  );
};

export default App;
