import axios from 'axios';
const RESOURCE_NAME = 'http://127.0.0.1:8000/api/admin/v1';
export default {
    getAll(name) {
        return axios.get(`${RESOURCE_NAME}/${name}`);
    },
    get(id) {
        return axios.get(`${RESOURCE_NAME}/${id}`);
    },
    create(data) {
        return axios.post(RESOURCE_NAME, data);
    },
    update(id, data) {
        return axios.put(`${RESOURCE_NAME}/${id}`, data);
    },
    delete(id) {
        return axios.delete(`${RESOURCE_NAME}/${id}`);
    }
};