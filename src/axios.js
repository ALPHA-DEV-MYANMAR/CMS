import axios from 'axios';
const RESOURCE_NAME = 'http://127.0.0.1:8000/api/v1';
const header = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}

export default {
    getAll(name) {
        return axios.get(`${RESOURCE_NAME}/${name}`,header);
    },
    get(name,id) {
        return axios.get(`${RESOURCE_NAME}/${name}/${id}?sub_categories=yes`,header);
    },
    create(name,data) {
        return axios.post(`${RESOURCE_NAME}/${name}`, data,header);
    },
    update(name,id,data) {
        return axios.put(`${RESOURCE_NAME}/${name}/${id}`, data,header);
    },
    delete(name,id) {
        return axios.delete(`${RESOURCE_NAME}/${name}/${id}`,header);
    },
    getPagination(url){
        return axios.get(url,header);
    }
};