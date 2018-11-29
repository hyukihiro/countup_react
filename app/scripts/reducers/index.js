import { combineReducers } from 'redux';

import number from './number';
import text from './text';
import resetText from './resetText';

export default combineReducers({
  number,
  text,
  resetText
});
