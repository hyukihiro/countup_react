/* @flow */
import React from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';

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

const Button = plus => (
  <StyledButton
    type="button"
    onClick={event => {
      event.preventDefault();
      plus(1);
    }}
  >
    足す
  </StyledButton>
);

const mapStateToProps = state => {
  return {
    number: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch({ type: 'PLUS', payload: { num } });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
