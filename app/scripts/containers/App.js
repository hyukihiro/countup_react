import { connect } from 'react-redux';
import App from '../components/App';
import { plus, reset, changeText } from '../actions';

const mapStateToProps = state => {
  return {
    number: state.number,
    text: state.text,
    resetText: state.resetText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch(plus(num));
    },
    reset: () => {
      dispatch(reset());
    },
    changeText: text => {
      dispatch(changeText(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
