import { Typography } from '@mui/material';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        Login
      </Typography>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
