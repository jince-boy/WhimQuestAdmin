import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from "axios";


const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000
})

/**
 * 请求拦截器
 */
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers.setAuthorization(`Bearer ${localStorage.getItem("token")}`)
    return config;
}, (error) => {
    return Promise.reject(error);
})

/**
 * 响应拦截器
 */
axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    if (response.data.code === 401 && response.data.status === false) {

    }
    return response;
}, (error) => {
    return Promise.reject(error)
})

export enum RequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}

const getConfigByMethod = (method: RequestMethod, params?: any) => {
    const isPayloadMethod = [RequestMethod.POST, RequestMethod.PUT, RequestMethod.PATCH].includes(method);
    if (isPayloadMethod) {
        return {data: params, method};
    } else {
        return {params, method};
    }
};

export const request = (url: string, params?: any, method?: RequestMethod) => {
    return new Promise((resolve, reject) => {
        const config = {
            url,
            ...getConfigByMethod(method || RequestMethod.GET, params)
        }
        axiosInstance(config).then(res => resolve(res)).catch(error => reject(error))
    })
}
export default axiosInstance;