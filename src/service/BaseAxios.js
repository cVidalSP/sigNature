import Axios from 'axios';

export default {
    init(baseURL) {
        Axios.defaults.baseURL = baseURL
    },

    async post(endpoint, payload, config) {
        return await Axios.post(endpoint, payload, config)
    },

    async get(endpoit) {
        return await Axios.get(endpoit);
    },
}