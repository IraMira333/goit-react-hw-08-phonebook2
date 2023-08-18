import React from 'react';

import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { minBoxHeightPx, pageWidth } from 'support/support';
import backgroundImage from 'support/PhoonBookCanva2-min.jpeg';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isUserName = useSelector(authSelectors.selectUsername);
  return (
    <Container
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#d1c4e9',
        paddingTop: '100px',
        minHeight: minBoxHeightPx,
        textAlign: 'center',
        '@media (min-width: 1200px)': {
          maxWidth: pageWidth,
        },
      }}
    >
      {!isLoggedIn ? (
        <div>
          <h1>
            Please <Link to="/register">register</Link> or{' '}
            <Link to="/login">login</Link>.
          </h1>
        </div>
      ) : (
        <div>
          <h1>Hello, {isUserName}.</h1>
          <h2>
            Would you like to see your <Link to="/contacts"> contacts</Link>?
          </h2>
        </div>
      )}
    </Container>
  );
}
