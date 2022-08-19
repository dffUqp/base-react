import React from 'react';
import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import MyButton from '../button/MyButton';
import classes from './Navbar.module.css';

function Navbar() {
  const isActiveLink = ({ isActive }) =>
    isActive
      ? [classes.navbar__links, classes.active_link].join(' ')
      : classes.navbar__links;

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const LogOuth = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <header>
      <nav className={classes.navbar}>
        <div>
          <NavLink className={isActiveLink} to="/post">
            Home
          </NavLink>
          <NavLink className={isActiveLink} to="/about">
            About app
          </NavLink>
        </div>
        {isAuth && <MyButton onClick={LogOuth}>LogOut</MyButton>}
      </nav>
    </header>
  );
}

export default Navbar;
