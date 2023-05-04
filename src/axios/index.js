import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: '/',
    timeout: 3000,
    // todo
    headers: {'token': '2f68dbbf-519d-4f01-9636-e2421b68f379'},
});
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default axiosInstance
