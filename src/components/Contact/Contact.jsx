import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 1.5,
        px: 2,
        width: '100%',
      }}
    >
      <Stack spacing={0.5}>
        <Typography
          variant="body1"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
          {contact.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <PhoneIcon sx={{ mr: 1, color: 'secondary.main' }} />
          {contact.number}
        </Typography>
      </Stack>
      <IconButton onClick={handleRemove} aria-label={`Delete ${contact.name}`}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default Contact;
