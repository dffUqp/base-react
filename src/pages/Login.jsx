import React from 'react';
import { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import Myinput from '../components/UI/input/Myinput';
import { AuthContext } from '../context/context';

function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const submitAuth = (event) => {
    event.preventDefault();
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={submitAuth}>
        <Myinput type="text" placeholder="Login" />
        <Myinput type="password" placeholder="Password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
}

export default Login;
