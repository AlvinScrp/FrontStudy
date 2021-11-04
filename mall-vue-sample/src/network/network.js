import axios from 'axios'

export function request (options) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    instance.interceptors.response.use((res) => res.data)
    return instance(options)
}
