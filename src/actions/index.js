import axios from 'axios';
import { CREATE_PROJECT, DELETE_PROJECT,ROOT_URL, FETCH_PROJECTS } from './constants';

export function fetchProjects() {
  const request = axios.get(`${ROOT_URL}/projects`);

  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}

export function createProject(data) {
  return {
    type: CREATE_PROJECT,
    payload: data
  };
}

export function deleteProject(id) {
  return {
    type: DELETE_PROJECT,
    payload: id
  };
}