interface IFilterState {
  activeFilter: string[];
}

const initialState: IFilterState = {
  activeFilter: ['NONE', 'ONE', 'TWO', 'THREE'],
};

interface IActionType {
  type: string;
  payload: any;
}

const filterReducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case 'ALL':
      if (state.activeFilter.length === action.payload.length) {
        return {
          ...state,
          activeFilter: [],
        };
      } else {
        const checkBox = action.payload.map((item: any) => item.value);
        return {
          ...state,
          activeFilter: checkBox,
        };
      }
    case 'NONE':
    case 'ONE':
    case 'TWO':
    case 'THREE':
      if (state.activeFilter.includes(action.payload.value)) {
        const newFilter = state.activeFilter.filter((item: string) => item !== action.payload.value);
        return {
          ...state,
          activeFilter: newFilter,
        };
      } else {
        return { ...state, activeFilter: [...state.activeFilter, action.payload.value] };
      }

    default:
      return state;
  }
};
export default filterReducer;
