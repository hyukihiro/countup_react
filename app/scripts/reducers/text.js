const text = (state = 'do unko', action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return action.payload.text;
    default:
      return state;
  }
};

export default text;
