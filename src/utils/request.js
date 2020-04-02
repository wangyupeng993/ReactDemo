import axios from 'axios';
import queryString from 'querystring';
const URL = process.env.NODE_ENV === 'development' ? '/' : 'http://49.232.43.137:9006';
const service = axios.create({
    baseURL: URL,
    timeout: 50000,
    responseType: 'json',
    // 向后端发送请求
    transformRequest: [response => {
        return response && response.append ? response : queryString.stringify(response)
    }],
    // 后端返回数据
    transformResponse: [response => response]
})

// 请求响应前拦截
service.interceptors.request.use(config => {
    return config;
},error => {
    return new Promise.reject(error);
});

// 请求响应后拦截
service.interceptors.response.use(response => {
    let JSONOBJ = null;
    try {
        JSONOBJ = JSON.parse(response.data);
    } catch (e) {
        JSONOBJ = response.data;
    }
    return JSONOBJ;
}, error => {
    return new Promise.reject(error)
});

export default service
