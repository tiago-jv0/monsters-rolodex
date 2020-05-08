import { SET_SEARCH_FIELD } from './search-field.types';

const INITIAL_STATE = {
  searchField: '',
};

const searchFieldReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_FIELD: {
      return {
        ...state,
        searchField: payload,
      };
    }
    default:
      return state;
  }
};

export default searchFieldReducer;
