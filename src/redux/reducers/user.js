import { RECEIVE_USER, REQUEST_USER } from '../actions/user';

const INITIAL_STATE = {
  loading: false,
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        user: null,
        loading: true,
      };

    case RECEIVE_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
