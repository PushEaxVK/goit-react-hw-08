import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './Navigation.module.css';
import { Link } from '@mui/material';
import NavigationLink from '../NavigationLink/NavigationLink';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavigationLink to="/">Home</NavigationLink>

      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </nav>
  );
};
export default Navigation;
