import axios from 'axios'
import * as actions from './constants'

export function fetchProjectsList () {
    return (dispatch) => axios.get(`${actions.ROOT_URL}/projects`)
        .then((data) =>
            dispatch({
                type: actions.FETCH_PROJECTS_LIST,
                payload: data
            })
        )
}

export function fetchProject (id) {
    return (dispatch) => axios.get(`${actions.ROOT_URL}/projects/${id}`)
        .then((data) =>
            dispatch({
                type: actions.FETCH_PROJECT,
                payload: data
            })
        )
}

export function createProject (data) {
    const params = {
        title: data.title,
        description: data.description
    }
    return (dispatch) => axios.post(`${actions.ROOT_URL}/projects`, params)
        .then((projectData) =>
            dispatch({
                type: actions.CREATE_PROJECT,
                payload: projectData
            })
        )
}

export function deleteProject (id) {
    return (dispatch) => axios.delete(`${actions.ROOT_URL}/projects/${id}`)
        .then((data) =>
            dispatch({
                type: actions.DELETE_PROJECT,
                id,
                payload: data
            })
        )
}

export function submitSpendings (id, spendings) {
    const params = {
        projectId: id,
        stage: spendings.stage,
        subStage: spendings.subStage,
        material: spendings.material,
        supplier: spendings.supplier,
        comments: spendings.comments,
        price: spendings.price,
        quantity: spendings.quantity
    }
    return (dispatch) => axios.post(`${actions.ROOT_URL}/projects/${id}/spendings`, params)
        .then((data) => {
            dispatch({
                type: actions.SUBMIT_SPENDING,
                payload: data
            })
        })

}

export function fetchSpendings (id) {
    return (dispatch) => axios.get(`${actions.ROOT_URL}/projects/${id}/spendings`)
        .then((data) => {
            dispatch({
                type: actions.FETCH_SPENDINGS,
                payload: data
            })
        })
}

export function deleteSpending (projectId, spendingId) {
    return (dispatch) => axios.delete(`${actions.ROOT_URL}/projects/${projectId}/spendings/${spendingId}`)
        .then(() => {
            dispatch({
                type: actions.DELETE_SPENDING,
                id: spendingId
            })
        })
}

export function fetchDictionaries () {
    return (dispatch) => axios.get(`${actions.ROOT_URL}/dictionaries`)
        .then((data) =>
            dispatch({
                type: actions.FETCH_DICTIONARIES,
                payload: data
            })
        )
}
