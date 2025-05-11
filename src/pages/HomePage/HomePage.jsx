import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const HomePage = () => {
  const user = useSelector(selectUser);

  return (
    <Box textAlign="center">
      <Typography variant="h3" gutterBottom>
        📇 Welcome{user?.name ? `, ${user.name}` : ''}!
      </Typography>

      <Typography variant="h6" color="text.secondary" paragraph>
        This is your personal contact book. You can:
      </Typography>

      <Box textAlign="left" maxWidth="sm" mx="auto" mb={4}>
        <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          <li>Save important contacts with name and phone number</li>
          <li>Search, filter, and edit your contacts</li>
          <li>Secure your data with authentication</li>
        </ul>
      </Box>
    </Box>
  );
};

export default HomePage;
