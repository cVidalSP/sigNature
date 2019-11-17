import Axios from 'axios';

export default {
    init(baseURL) {
        Axios.defaults.baseURL = baseURL
    },

    setHeader(token) {
        Axios.defaults.headers.common['x-access-token'] = token;
    },

    async post(endpoint, payload) {
        return await Axios.post(endpoint, payload)
    },

    async get(endpoit) {
        return await Axios.get(endpoit);
    },
}