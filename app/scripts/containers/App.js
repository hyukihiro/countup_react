import { connect } from 'react-redux';
import App from '../components/App';
import { plus, reset } from '../actions';

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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
