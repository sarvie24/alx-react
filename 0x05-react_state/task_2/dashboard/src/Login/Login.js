import React, { useState } from 'react';

const Login = ({ logIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(email, password);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
