import React from 'react';
import { HashRouter } from 'react-router-dom';
import './styles/App.css';
import AppRoute from './components/AppRoute';
import Navbar from './components/UI/navbar/Navbar';
import { AuthContext } from './context/context';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(localStorage.getItem('auth'));
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <HashRouter>
        <Navbar />
        <AppRoute />
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
