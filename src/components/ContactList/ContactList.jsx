import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import { deleteContact } from 'redux/contacts';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  function SortArray(x, y) {
    return x.name.localeCompare(y.name);
  }
  const sortContacts = contacts.sort(SortArray);

  return (
    <List sx={{ maxWidth: '350px', marginLeft: 'auto', marginRight: 'auto' }}>
      {sortContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ListItemIcon>
              <ContactPhoneIcon />
            </ListItemIcon>
            <ListItemText primary={contact.name} secondary={contact.number} />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
