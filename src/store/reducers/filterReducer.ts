interface IFilterState {
  filterCheckBox: string[];
}

const initialState: IFilterState = {
  filterCheckBox: ['NONE', 'ONE', 'TWO', 'THREE'],
};

interface IActionType {
  type: string;
  payload: any;
}

const filterReducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case 'ALL':
      return {
        state: [],
      };
    default:
      return state;
  }
};
export default filterReducer;
