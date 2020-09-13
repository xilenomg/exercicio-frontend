import { getUser } from '../../services/User';

export const REQUEST_USER = 'REQUEST_USER';
function requestUser() {
  return {
    type: REQUEST_USER,
  };
}

export const RECEIVE_USER = 'RECEIVE_USER';
function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user,
  };
}

export function fetchUser() {
  return (dispatch) => {
    dispatch(requestUser());
    (async () => {
      const user = await getUser();
      dispatch(receiveUser(user));
    })();
  };
}
