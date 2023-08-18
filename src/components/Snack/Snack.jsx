import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Snack({ isOpen, handleClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert severity="success">
        You have successfully added a contact to your list!
      </Alert>
    </Snackbar>
  );
}
