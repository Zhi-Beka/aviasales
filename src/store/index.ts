import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filterReducer, ticketsReducer, sortReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { showMoreReducer } from './reducers/showMoreReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  tickets: ticketsReducer,
  showMore: showMoreReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
