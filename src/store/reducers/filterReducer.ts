const initialState = {};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'All':
      return state;

    default:
      return state;
  }
};
