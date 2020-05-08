import { REQUEST_ROBOTS_FAILURE, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING } from './robots-types';

const INITIAL_STATE = {
  robots: [],
  isLoading: false,
  error: '',
};

const robotsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isLoading: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: payload, error: '', isLoading: false };
    case REQUEST_ROBOTS_FAILURE:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};

export default robotsReducer;
