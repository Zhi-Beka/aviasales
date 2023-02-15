import { createStore, combineReducers } from 'redux';
import { filterReducer } from './reducers/filterReducer';

const rootReducer = combineReducers({
  filterReducer,
});

export const store = createStore(rootReducer);
