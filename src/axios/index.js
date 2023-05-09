import {Message} from 'element-ui'
import axios from 'axios'
import router from '../router'
import {getDecryptToken} from '@/utils/auth'

const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 3000,
});
const responseErrorMap = {
    401: '用户未登录',
    403: '无权限访问',
    404: '请求地址不存在',
    405: '请求方法不正确',
    415: '参数传递一场',
    500: '业务一场'
}

axiosInstance.interceptors.request.use(function (config) {
    const token = getDecryptToken()
    token && (config.headers.token = token)
    return config;
}, function (error) {
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (response) {
    const {config, data} = response
    if (data.code in responseErrorMap) {
        if (!config.noErrMsg) {
            Message.error(data.msg || responseErrorMap[data.code])
        }
        if ([401, 403].includes(data.code)) {
            router.replace('/auth/login')
        }
        return Promise.reject(data.code)
    }
    return data.data;
}, function (error) {
    Message.error(error)
    return Promise.reject(error);
});
export default axiosInstance

