/* @flow */
import React from 'react';
// import styled from 'react-emotion';

import { connect } from 'react-redux';

// const StyledText = styled('p')`
//   color: #0ff;
//   font-size: 10px;
// `;

const Text = number => <p>{number}</p>;

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
)(Text);
