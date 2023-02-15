import { FilterActions } from '../actions/filterActions';
import { IFilterActions, IFilterState } from '../types';

const initialState: IFilterState = {
  filter: 'All',
  checked: false,
  error: false,
};

export const filterReducer = (state = initialState, action: IFilterActions): IFilterState => {
  switch (action.type) {
    case FilterActions.FILTER_ALL:
      return {
        filter: action.type,
        checked: true,
        error: false,
      };

    default:
      return state;
  }
};
