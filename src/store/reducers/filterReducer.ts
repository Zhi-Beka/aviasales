import { FilterActions } from '../actions/filterActions';
import { IFilterActions, checkboxes } from '../../types/filterTypes';

export const filterReducer = (state = checkboxes, action: IFilterActions) => {
  switch (action.type) {
    case FilterActions.FILTER_ALL:
      return state.map((el) => {
        return {
          ...el,
          checked: !el.checked,
        };
      });

    case FilterActions.FILTER_ONE:
    case FilterActions.FILTER_THREE:
    case FilterActions.FILTER_TWO:
    case FilterActions.FILTER_NO:
      return state.map((el, index) => {
        const { id } = action.payload;
        if (index === id) {
          return {
            ...el,
            checked: !el.checked,
          };
        }
        return el;
      });

    default:
      return state;
  }
};
