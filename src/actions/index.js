import axios from 'axios';
import {
    CREATE_PROJECT, DELETE_PROJECT, ROOT_URL, FETCH_PROJECT, FETCH_PROJECTS,
    SUBMIT_SPENDING, FETCH_SPENDINGS, FETCH_DICTIONARIES, DELETE_SPENDING
} from './constants';

export function fetchProjects() {
    const request = axios.get(`${ROOT_URL}/projects`);

    return {
        type: FETCH_PROJECTS,
        payload: request
    };
}

export function fetchProject(id) {
    const request = axios.get(`${ROOT_URL}/projects/${id}`);

    return {
        type: FETCH_PROJECT,
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
        id: id,
        payload: request
    };
}

export function submitSpendings(id, spendings) {
    const request = axios.post(`${ROOT_URL}/projects/${id}/spendings`, {
        projectId: id,
        stage: spendings.stage,
        subStage: spendings.subStage,
        material: spendings.material,
        supplier: spendings.supplier,
        comments: spendings.comments,
        price: spendings.price,
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

export function deleteSpending(id) {
    return {
        type: DELETE_SPENDING,
        id
    }
}

export function fetchDictionaries() {
    const request = axios.get(`${ROOT_URL}/dictionaries`);

    return {
        type: FETCH_DICTIONARIES,
        payload: request
    };
}
