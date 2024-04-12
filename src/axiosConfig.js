import axios from "axios";
import {apiUrl} from '@/globals';
export default {
    getHeader(tokenName) {
        const token =
            tokenName &&
            JSON.parse(window.localStorage.getItem(tokenName))?.access_token;
        return token ? { Authorization: `Bearer ${token}` } : {};
    },

    get(url, tokenName, additionalHeaders = {}) {
        const headers = { ...this.getHeader(tokenName), ...additionalHeaders };
        return axios.get((apiUrl + 'api/') + url, { headers });
    },
    post(url, data, tokenName, additionalHeaders = {}) {
        const headers = { ...this.getHeader(tokenName), ...additionalHeaders };
        return axios.post((apiUrl + 'api/') + url, data, { headers });
    },
    initialize() {
        axios.defaults.baseURL = (apiUrl + 'api/');
    },
};
