import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filterReducer, ticketsReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
