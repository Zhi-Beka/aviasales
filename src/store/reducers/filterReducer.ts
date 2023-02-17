import { FilterActions } from '../actions/filterActions';
import { IFilterActions, checkboxes } from '../../types/filterTypes';

const filterReducer = (state = checkboxes, action: IFilterActions) => {
  switch (action.type) {
    case FilterActions.FILTER_ALL:
      return state.map((el) => {
        const { checked } = action.payload;
        return {
          ...el,
          isChecked: checked,
        };
      });

    case FilterActions.FILTER_ONE:
    case FilterActions.FILTER_THREE:
    case FilterActions.FILTER_TWO:
    case FilterActions.FILTER_NO:
      return state.map((el) => (el.title === action.payload.name ? { ...el, isChecked: action.payload.checked } : el));

    default:
      return state;
  }
};
export default filterReducer;
