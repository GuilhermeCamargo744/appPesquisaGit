import axios from "axios";

const api = axios.create({
    baseURL:"http://api.github.com/users/{user}/repos",
})

export default api