import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { StyledNav, StyledNavLink } from './TopBar.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const privateInfo = (
    <>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <StyledNavLink to="/addcontacts">Add Contact</StyledNavLink>
    </>
  );
  return (
    <StyledNav>
      <StyledNavLink to="/">HomePage</StyledNavLink>

      {isLoggedIn && privateInfo}
    </StyledNav>
  );
}
