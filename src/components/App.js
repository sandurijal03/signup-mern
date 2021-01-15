import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const registered = {
      fullname,
      username,
      email,
      password,
    };
    axios
      .post('http://localhost:3001/api/signup', registered)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));

    setFullname('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='container'>
      <div className='form-div'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={fullname}
            placeholder='fullname'
            onChange={(e) => setFullname(e.target.value)}
            className='form-control form-group'
          />
          <input
            type='email'
            value={email}
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
            className='form-control form-group'
          />
          <input
            type='text'
            value={username}
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            className='form-control form-group'
          />
          <input
            type='password'
            value={password}
            placeholder='pasword'
            onChange={(e) => setPassword(e.target.value)}
            className='form-control form-group'
          />

          <button className='btn btn-primary btn-block' type='submit'>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
