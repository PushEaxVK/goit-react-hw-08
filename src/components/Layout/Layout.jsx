import { Container } from '@mui/material';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Container maxWidth="md" sx={{ py: 6 }}>
        {children}
      </Container>
    </div>
  );
};
export default Layout;
