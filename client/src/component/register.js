import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    // Perform signup logic here
    // For simplicity, let's just display the entered values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={signup}>Signup</button>
    </div>
  );
};

export default Signup;
