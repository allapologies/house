// var port = process.env.PORT || 80;
// var host = process.env.IP || 'cbv-tec.herokuapp.com';
var port = process.env.PORT || 8080;
var host = process.env.IP || '127.0.0.1';

export const ROOT_URL = `http://${host}:${port}/api`;

export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';


export const SUBMIT_SPENDING = 'SUBMIT_SPENDING';
export const DELETE_SPENDING = 'DELETE_SPENDING';
export const FETCH_SPENDINGS = 'FETCH_SPENDINGS';

export const FETCH_DICTIONARIES = 'FETCH_DICTIONARIES';