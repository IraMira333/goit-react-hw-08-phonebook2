import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from 'redux/contacts';

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function ContactForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findingDoubleName = useSelector(selectContacts);

  const onSubmit = async e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    const existingContact = findingDoubleName.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in contacts!`);
      return;
    }
    try {
      await dispatch(addContact({ name, number })).unwrap();
      navigate('/contacts');
    } catch (error) {
      alert(error.message);
    } finally {
      e.target.reset();
    }
  };

  return (
    <Box
      sx={{
        width: '300px',
        marginTop: 8,
        border: '2px solid #4a148c',
        borderRadius: '8px',
        marginLeft: 'auto',
        marginRight: 'auto',
        bgcolor: '#f3e5f5',
      }}
    >
      <Avatar
        sx={{
          m: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          bgcolor: 'secondary.main',
        }}
      >
        <ContactPhoneIcon />
      </Avatar>
      <Box
        component="form"
        onSubmit={onSubmit}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          type="text"
          name="name"
          size="small"
          id="outlined-basic"
          label="Name"
          pattern="^[a-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          variant="outlined"
          sx={{
            background: 'white',
            borderRadius: '8px',
            marginTop: '5px',
          }}
        />
        <TextField
          type="tel"
          name="number"
          size="small"
          id="outlined-basic"
          label="Number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          variant="outlined"
          sx={{
            background: 'white',
            borderRadius: '8px',
            marginTop: '10px',
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            background: 'linear-gradient(to right bottom, #5275e9, #d08dd3)',
          }}
        >
          Add contact
        </Button>
      </Box>
    </Box>
  );
}
