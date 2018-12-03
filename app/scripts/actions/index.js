export const plus = num => {
  return { type: 'PLUS', payload: { num } };
};
export const reset = () => {
  return { type: 'RESET' };
};

export const changeText = text => {
  return { type: 'CHANGE_TEXT', payload: { text } };
};
