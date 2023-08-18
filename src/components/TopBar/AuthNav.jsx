import React from 'react';
import { StyledNavLink } from './TopBar.styled';

export default function AuthNav() {
  return (
    <>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">LogIn</StyledNavLink>
    </>
  );
}
