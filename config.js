import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: ""
    //baseURL: "https://exd-requests-api-3yng.onrender.com/api/"
})

export default axiosInstance