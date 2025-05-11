import s from './AuthNav.module.css';
import NavigationLink from '../NavigationLink/NavigationLink';

const AuthNav = () => {
  return (
    <div className={s.nav}>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Login</NavigationLink>
    </div>
  );
};
export default AuthNav;
