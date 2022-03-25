import axios from 'axios';
const RESOURCE_NAME = 'http://127.0.0.1:8000/api/v1';

export default {
    getAll(name) {
        return axios.get(`${RESOURCE_NAME}/${name}`,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    get(name,id) {
        return axios.get(`${RESOURCE_NAME}/${name}/${id}?sub_categories=yes`,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
    },
    create(name,data) {
        return axios.post(`${RESOURCE_NAME}/${name}`, data,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
    },
    update(name,id,data) {
        return axios.put(`${RESOURCE_NAME}/${name}/${id}`, data,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
    },
    delete(name,id) {
        return axios.delete(`${RESOURCE_NAME}/${name}/${id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
    },
    getPagination(url){
        return axios.get(url,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    }
};