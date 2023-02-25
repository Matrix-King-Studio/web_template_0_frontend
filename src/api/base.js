import axios from "axios"

const service = axios.create({
    baseURL: "https://www.template.matrix-studio.top/dapi",
    withCredentials: true,
})

export default service
