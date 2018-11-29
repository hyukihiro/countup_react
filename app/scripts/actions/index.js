export const plus = num => {
  return { type: 'PLUS', payload: { num } };
};
export const reset = () => {
  return { type: 'RESET' };
};
