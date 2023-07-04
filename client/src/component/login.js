import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Perform login logic here
    // For simplicity, let's just check if the username and password are not empty
    if (username !== '' && password !== '') {
      setIsLoggedIn(true);
      console.log('Logged in successfully!');
    } else {
      console.log('Invalid username or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={login}>Login</button>
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
  );
};

export default Login;
