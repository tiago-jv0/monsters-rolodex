import { combineReducers } from 'redux';

import searchFieldReducer from './search-field/search-field.reducer';

const reducers = combineReducers({
  searchField: searchFieldReducer,
});

export default reducers;
