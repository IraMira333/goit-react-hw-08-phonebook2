import React from 'react';
import { StyledAuthBox, StyledNavLink } from './TopBar.styled';

export default function AuthNav() {
  return (
    <StyledAuthBox>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">LogIn</StyledNavLink>
    </StyledAuthBox>
  );
}
