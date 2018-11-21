import React from 'react';
import styled from 'react-emotion';
import Button from '../atoms/button';
import Text from '../atoms/textField';

const Wrap = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100px;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const Container = props => (
  <Wrap>
    <Button label={props.label} />
    <Text text={props.text} />
  </Wrap>
);
export default Container;
