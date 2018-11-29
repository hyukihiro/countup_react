const number = (state = 0, action) => {
  switch (action.type) {
    case 'PLUS':
      return state + action.payload.num;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

export default number;
