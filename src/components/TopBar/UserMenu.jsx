import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { authSelectors, logOut } from 'redux/auth';
import { ColorButton } from './UserMenu.styled';
import {
  StyledHelloUserDiv,
  StyledHelloUserSpan,
  StyledUserNameSpan,
} from './TopBar.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);

  return (
    <StyledHelloUserDiv>
      <StyledHelloUserSpan>Hello,</StyledHelloUserSpan>
      <StyledUserNameSpan>{name}</StyledUserNameSpan>
      <ColorButton
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </ColorButton>
    </StyledHelloUserDiv>
  );
}
