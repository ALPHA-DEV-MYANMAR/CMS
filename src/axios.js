import axios from 'axios';
const RESOURCE_NAME = 'http://127.0.0.1:8000/api/admin/v1';

export default {
    getAll(name) {
        return axios.get(`${RESOURCE_NAME}/${name}`);
    },
    get(name,id) {
        return axios.get(`${RESOURCE_NAME}/${name}/${id}?sub_categories=yes`);
    },
    create(name,data) {
        return axios.post(`${RESOURCE_NAME}/${name}`, data);
    },
    update(name , id, data) {
        return axios.put(`${RESOURCE_NAME}/${name}/${id}`, data);
    },
    delete(id) {
        return axios.delete(`${RESOURCE_NAME}/${id}`);
    },
    getPagination(url){
        return axios.get(url);
    }
};