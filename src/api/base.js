import axios from "axios"

console.log(document.cookie);
const service = axios.create({
    baseURL: "http://www.template.matrix-studio.top/dapi",
    withCredentials: true,
})

export default service
