import axios from "axios"

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const service = axios.create({
    baseURL: "https://www.template.matrix-studio.top/dapi",
    withCredentials: true,
})

export default service
