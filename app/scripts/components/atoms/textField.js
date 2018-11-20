/* @flow */
import React from 'react';
import styled from 'react-emotion';

const StyledText = styled('p')`
  color: #0ff;
`;

const Text = props => <StyledText type="p">{props.text}</StyledText>;
export default Text;
