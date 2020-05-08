import { combineReducers } from 'redux';

import searchFieldReducer from './search-field/search-field.reducer';
import robotsReducer from './robots/robots.reducers';

const reducers = combineReducers({
  searchField: searchFieldReducer,
  robots: robotsReducer,
});

export default reducers;
