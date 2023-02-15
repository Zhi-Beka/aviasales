import { ISortAction } from '../../types/sortTypes';
import { SortActions } from '../actions/sortActions';

const initialState: string[] = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

const sortReducer = (state = initialState, action: ISortAction) => {
  switch (action.type) {
    case SortActions.CHEAPEST_TICKET:
      return state;
    default:
      return state;
  }
};

export default sortReducer;
