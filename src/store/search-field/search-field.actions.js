import { SET_SEARCH_FIELD } from './search-field.types';

export const setSearchField = (text) => ({
  type: SET_SEARCH_FIELD,
  payload: text,
});
