import { CREATE_PROJECT, DELETE_PROJECT } from './constants';

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