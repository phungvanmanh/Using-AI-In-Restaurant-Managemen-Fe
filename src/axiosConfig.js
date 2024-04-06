import axios from "axios";
import router from "./router";
// const apiUrl = 'http://192.168.1.174:8000/api/';
const apiUrl = "http://127.0.0.1:8000/api/";
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
        ) {
            // Xóa JWT từ localStorage hoặc cookies ở đây nếu bạn muốn
            localStorage.removeItem("admin"); // Hoặc tên token phù hợp mà bạn đang sử dụng
            router.push("/login");
        }
        return Promise.reject(error);
    }
);
export default {
    getHeader(tokenName) {
        const token =
            tokenName &&
            JSON.parse(window.localStorage.getItem(tokenName))?.access_token;
        return token ? { Authorization: `Bearer ${token}` } : {};
    },

    get(url, tokenName, additionalHeaders = {}) {
        const headers = { ...this.getHeader(tokenName), ...additionalHeaders };
        return axios.get(apiUrl + url, { headers });
    },
    post(url, data, tokenName, additionalHeaders = {}) {
        const headers = { ...this.getHeader(tokenName), ...additionalHeaders };
        return axios.post(apiUrl + url, data, { headers });
    },
    initialize() {
        axios.defaults.baseURL = apiUrl;
    },
};
