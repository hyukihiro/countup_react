/* @flow */
import React from 'react';
import styled from 'react-emotion';

const StyledInput = styled('input')`
  margin-bottom: 30px;
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 2px;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1) inset;
`;

const InputField = props => (
  <StyledInput
    type="input"
    onChange={event => {
      props.changeText(event.target.value);
    }}
    value={props.text}
  />
);

export default InputField;
