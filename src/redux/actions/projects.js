import { getProjects } from '../../services/Project';

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
function requestProjects() {
  return {
    type: REQUEST_PROJECTS,
  };
}

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
function receiveProjects(projects) {
  return {
    type: RECEIVE_PROJECTS,
    projects,
  };
}

export function fetchProjects() {
  return (dispatch) => {
    dispatch(requestProjects());
    (async () => {
      const projects = await getProjects();
      dispatch(receiveProjects(projects));
    })();
  };
}
