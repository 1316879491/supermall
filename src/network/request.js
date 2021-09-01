import axios from "axios";

export function request(config) {
        const instance = axios.create({
            baseURL:'http://152.136.185.210:7878/api/m5',
            timeout:5000
        })

        instance.interceptors.request.use(config => {
            /* console.log(config); */
            return config //这儿必须返回,否则拿不到结果
        },err => {
            /* console.log(err); */
        })
        instance.interceptors.response.use(res => {
           /*  console.log(res); */
            return res.data
        },err => {
            /* console.log(err); */
        })

        return instance(config)
}


/* export function request(config) {
    return new Promise((resolve,reject) => {
        const instance = axios.create({
            baseURL:'',
            timeout:5000
        })

        instance(config)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}
 */
/* export function request(config,success,failure) {
    const instance = axios.create({
        baseURL:'http://www.httpbin.org/',
        timeout:5000
    })

    instance(config)
    .then(res => {
        success(res)
    })
    .catch(err => {
        failure(err)
    })
} */
/* export function request(config) {
    const instance = axios.create({
        baseURL:'http://www.httpbin.org/',
        timeout:5000
    })

    instance(config.baseConfig)
    .then(res => {
        config.success(res);
    })
    .catch(err => {
        config.failure(err)
    })
} */