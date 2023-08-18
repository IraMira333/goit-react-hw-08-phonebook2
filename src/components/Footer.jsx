import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import purple from '@material-ui/core/colors/purple';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
      sx={{
        fontSize: '8px',
        '@media (min-width:540px)': {
          fontSize: '12px',
        },
      }}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://iramira333.github.io/goit-react-hw-08-phonebook/"
      >
        PhoneBook
      </Link>
      {' by '}
      <Link
        color="inherit"
        href="https://github.com/IraMira333/goit-react-hw-08-phonebook"
      >
        Trynkal Iryna
      </Link>
      {' in '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  const primary = purple[900];
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 1,
          px: 2,
          mt: 'auto',
          color: primary,

          background: 'linear-gradient(to right bottom, #5275e9, #d08dd3)',
        }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: '12px',
            fontWeight: '700',
            '@media (min-width:540px)': {
              fontSize: '18px',
            },
          }}
        >
          Let you always have someone to call!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
