import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { deepPurple, purple } from '@mui/material/colors';

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[300],
  fontWeight: '500',
  boxShadow: '2px 2px 2px 2px #512da8',
  border: '1px solid #512da8',
  marginRight: '15px',
  fontFamily: 'Roboto',
  textTransform: 'none',
  fontSize: '12px',
  padding: '1px 10px',
  '&:hover': {
    backgroundColor: purple[700],
  },
  '@media (min-width:550px)': {
    fontSize: '16px',
    padding: '6px 16px',
  },
}));
