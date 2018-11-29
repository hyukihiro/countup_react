/* @flow */
import React from 'react';
import styled from 'react-emotion';

const StyledText = styled('p')`
  color: #222;
  font-size: 14px;
  padding: 20px 0;
`;

const Text = props => <StyledText type="p">{props.number} ㍑</StyledText>;
export default Text;
