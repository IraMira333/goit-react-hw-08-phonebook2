import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from 'support/breakpoints';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #212121;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #4a148c;
    font-weight: 700;
  }
  @media ${devices.md} {
    font-size: 18px;
    padding: 15px;
  }
`;

export const StyledHeader = styled.header`
  display: block;
  /* justify-content: space-between; */
  /* align-items: center; */
  flex: 0 0 auto;
  border-bottom: 1px solid #2a363b;

  background: linear-gradient(to right bottom, #5275e9, #d08dd3);
  @media ${devices.md} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const StyledHelloUserDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3px;
  @media ${devices.md} {
    align-items: center;
  }
`;

export const StyledHelloUserSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #212121;
  font-family: Roboto, sans-serif;
  margin-right: 5px;
  @media ${devices.md} {
    font-size: 18px;
    margin-right: 12px;
  }
`;

export const StyledUserNameSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #4a148c;
  font-family: Lobster;
  margin-right: 12px;
  @media ${devices.md} {
    font-size: 20px;
  }
`;
export const StyledNav = styled.nav`
  text-align: center;
`;
