import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

export default function CookiesDemo() {
  const [cookies, setCookies, removeCookie] = useCookies(['username']);
  const [UserDetails, setUserDetails] = useState({
    Name: '',
    Password: ''
  });

  function handleName(e) {
    setUserDetails({
      Name: e.target.value,
      Password: UserDetails.Password
    });
  }

  function handlePassword(e) {
    setUserDetails({
      Name: UserDetails.Name,
      Password: e.target.value
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    setCookies('username', UserDetails.Name, { path: '/' });
    alert('Login success');
  }
  function handleLogout(e) {
    
    removeCookie('username', { path: '/' });
    alert('Logout success');
  }

  return (
    <div className="container">
      <dl>
        <dt>Name</dt>
        <dd><input onChange={handleName} type="text"></input></dd>
        <dt>Password</dt>
        <dd><input onChange={handlePassword} type="text"></input></dd>
        {/* Use onClick instead of onChange for the login button */}
        <dt><button onClick={handleLogin} className='btn btn-danger'>login</button></dt>
      </dl>
      <h1>Hello! {cookies.username}</h1>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
}
