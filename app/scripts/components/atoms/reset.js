/* @flow */
import React from 'react';
import styled from 'react-emotion';

const StyledButton = styled('button')`
  min-width: 100px;
  color: #0075fa;
  border: 2px solid #0075fa;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  &:hover {
    background-color: #0075fa;
    color: #fff;
  }
`;

const Reset = props => (
  <StyledButton
    type="button"
    onClick={event => {
      event.preventDefault();
      props.reset();
    }}
  >
    {props.resetText}
  </StyledButton>
);

export default Reset;
