import axios from "axios"

const service = axios.create({
    baseURL: "http://www.template.matrix-studio.top/dapi",
    withCredentials: true,
})

export default service
