/* @flow */
import React from 'react';
import styled from 'react-emotion';

const StyledButton = styled('button')`
  color: #ff00ff;
  border: 2px solid #ff00ff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  &:hover {
    background-color: #ff00ff;
    color: #fff;
  }
`;

const Button = props => (
  <StyledButton
    type="button"
    onClick={event => {
      event.preventDefault();
      console.log('a');
    }}
  >
    {props.label}
  </StyledButton>
);
export default Button;
