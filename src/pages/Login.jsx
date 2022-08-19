import React from "react";
import { useContext } from "react";
import Myinput from "../components/UI/input/Myinput";
import { AuthContext } from "../context/context";

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const submitAuth = (event) => {
    event.preventDefault();
    localStorage.setItem('auth', 'true')
    setIsAuth(true);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={submitAuth}>
        <Myinput type="text" placeholder="Login" />
        <Myinput type="text" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
