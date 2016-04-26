import { CREATE_PROJECT } from './constants';

export function createProject(data) {

  return {
    type: CREATE_PROJECT,
    payload: data
  };
}