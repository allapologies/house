import axios from 'axios';
import { CREATE_PROJECT, DELETE_PROJECT,ROOT_URL, FETCH_PROJECTS,SUBMIT_SPENDING, FETCH_SPENDINGS } from './constants';

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

export function submitSpendings(spendings) {
  const request = axios.post(`${ROOT_URL}/projects/${spendings.id}/spendings`, {
    projectId:spendings.id,
    stage:    spendings.stage,
    subStage: spendings.subStage,
    material: spendings.material,
    supplier: spendings.supplier,
    comments: spendings.comments,
    price:    spendings.price,
    quantity: spendings.quantity
  });

  return {
    type: SUBMIT_SPENDING,
    payload: request
  };
}

export function fetchSpendings(id) {
  const request = axios.get(`${ROOT_URL}/projects/${id}/spendings`);

  return {
    type: FETCH_SPENDINGS,
    payload: request
  };
}