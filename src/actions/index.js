import axios from 'axios';
import * as actions from './constants';

export function fetchProjectsList() {
    const request = axios.get(`${actions.ROOT_URL}/projects`);

    return {
        type: actions.FETCH_PROJECTS_LIST,
        payload: request
    };
}

export function fetchProject(id) {
    const request = axios.get(`${actions.ROOT_URL}/projects/${id}`);

    return {
        type: actions.FETCH_PROJECT,
        payload: request
    };
}

export function createProject(data) {
    const request = axios.post(`${actions.ROOT_URL}/projects`, {
        title: data.title,
        description: data.description
    });

    return {
        type: actions.CREATE_PROJECT,
        payload: request
    };
}

export function deleteProject(id) {
    const request = axios.delete(`${actions.ROOT_URL}/projects/${id}`);

    return {
        type: actions.DELETE_PROJECT,
        id: id,
        payload: request
    };
}

export function submitSpendings(id, spendings) {
    const request = axios.post(`${actions.ROOT_URL}/projects/${id}/spendings`, {
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
        type: actions.SUBMIT_SPENDING,
        payload: request
    };
}

export function fetchSpendings(id) {
    const request = axios.get(`${actions.ROOT_URL}/projects/${id}/spendings`);

    return {
        type: actions.FETCH_SPENDINGS,
        payload: request
    };
}

export function deleteSpending(projectId, spendingId) {
    axios.delete(`${actions.ROOT_URL}/projects/${projectId}/spendings/${spendingId}`)

    return {
        type: actions.DELETE_SPENDING,
        id: spendingId
    }
}

export function fetchDictionaries() {
    const request = axios.get(`${actions.ROOT_URL}/dictionaries`);

    return {
        type: actions.FETCH_DICTIONARIES,
        payload: request
    };
}
