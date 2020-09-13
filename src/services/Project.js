import request from '../interfaces/request';

export const getProjects = async () => {
  try {
    const projects = await request({ method: 'GET', url: '/projects' });
    return projects.data;
  } catch (err) {
    return [];
  }
};
