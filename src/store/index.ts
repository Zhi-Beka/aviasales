import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filterReducer } from './reducers/filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  filter: filterReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
