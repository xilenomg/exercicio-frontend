import { RECEIVE_PROJECTS, REQUEST_PROJECTS } from '../actions/projects';

const INITIAL_STATE = {
  loading: false,
  projects: [],
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return {
        ...state,
        projects: [],
        loading: true,
      };

    case RECEIVE_PROJECTS:
      return {
        ...state,
        projects: action.projects,
        loading: false,
      };

    default:
      return state;
  }
};

export default projectReducer;
