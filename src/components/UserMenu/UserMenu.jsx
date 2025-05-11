import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import s from './UserMenu.module.css';
import { Button, Typography } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <Typography variant="h6">Welcome, {user.name}</Typography>
      <Button
        onClick={() => dispatch(logout())}
        variant="contained"
        color="secondary"
        sx={{
          fontSize: '1rem',
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
