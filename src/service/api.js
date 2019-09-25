import axios from 'axios';
const baseApi = 'http://localhost:1234';

// const baseApi = 'https://restcountries.eu/rest/v2/name';
const token = localStorage.getItem('token');

const get = (route) => {
    return axios.get(`${baseApi}/${route}`, token);
}

const post = (route, data) => {
    return axios.post(`${baseApi}/${route}`,data, token);
}

const put = (route, data) => {
    return axios.put(`${baseApi}/${route}`,data);
}

const patch = (route,data) => {
    return axios.patch(`${baseApi}/${route}`,data);
}

const del = (route, data) => {
    return axios.delete(`${baseApi}/${route}`);
}

export default {
    get,
    put,
    post,
    patch,
    delete : del
};