import React, { useState } from 'react';
import SessionController from '../networking/controllers/SessionController';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SessionController.register(username, password, mail);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Register;
