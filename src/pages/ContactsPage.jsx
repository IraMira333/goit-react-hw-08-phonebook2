import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@mui/material/Container';
import Typography from '@material-ui/core/Typography';

import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Spiner from 'components/Spiner/Spiner';
import Snack from 'components/Snack/Snack';
import {
  addedContact,
  getContacts,
  selectContactIsAdded,
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts';
import { minBoxHeightPx, pageWidth } from 'support/support';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const showContacts = !isLoading && !isError && contacts.length > 0;
  const showNoContacts = !isLoading && !isError && contacts.length === 0;
  const dispatch = useDispatch();

  const isContactAdded = useSelector(selectContactIsAdded);
  //const [contactIsAdded, setContactIsAdded] = useState(false);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  function onClose() {
    dispatch(addedContact());
  }

  return (
    <Container
      sx={{
        bgcolor: '#cfe8fc',
        marginLeft: '0',
        marginRight: '0',
        paddingTop: '10px',
        minHeight: minBoxHeightPx,
        textAlign: 'center',
        '@media (min-width: 1200px)': {
          maxWidth: pageWidth,
        },
      }}
    >
      <Typography variant="h3" color="primary">
        Contacts
      </Typography>
      {isLoading && <Spiner />}
      {isError && <p>{isError}</p>}{' '}
      {showContacts && (
        <>
          <Filter />
          <ContactList contacts={filteredContacts} />
        </>
      )}
      {showNoContacts && <p>You don't have any contact yet</p>}
      <Snack isOpen={isContactAdded} handleClose={onClose} />
    </Container>
  );
}
