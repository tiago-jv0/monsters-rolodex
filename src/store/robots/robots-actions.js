import { REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_FAILURE, REQUEST_ROBOTS_SUCCESS } from './robots-types';

export const request_robots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  try {
    const robots = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    dispatch(request_robots_success(robots));
  } catch (error) {
    dispatch(request_robots_failure(error));
  }
};

export const request_robots_success = (robots) => ({
  type: REQUEST_ROBOTS_SUCCESS,
  payload: robots,
});

export const request_robots_failure = (error) => ({
  type: REQUEST_ROBOTS_FAILURE,
  payload: error,
});
