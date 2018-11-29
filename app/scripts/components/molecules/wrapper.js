import React from 'react';
import styled from 'react-emotion';
import Button from '../atoms/button';
import Text from '../atoms/textField';
import Reset from '../atoms/reset';

const Wrap = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 160px;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const Wrapper = props => (
  <Wrap>
    <Button text={props.text} plus={props.plus} />
    <Text number={props.number} />
    <Reset reset={props.reset} resetText={props.resetText} />
  </Wrap>
);
export default Wrapper;
