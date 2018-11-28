const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'PLUS':
      return state + action.payload.num;
    case 'RESET':
      return 0;
    case 'default':
      return state;
  }
};

export default reducer;
