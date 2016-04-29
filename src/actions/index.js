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
  const request = axios.post(`${ROOT_URL}/projects`, {
    title: data.title,
    description: data.description
  });

  return {
    type: CREATE_PROJECT,
    payload: request
  };
}

export function deleteProject(id) {
  const request = axios.delete(`${ROOT_URL}/projects/${id}`);

  return {
    type: DELETE_PROJECT,
    payload: request
  };
}