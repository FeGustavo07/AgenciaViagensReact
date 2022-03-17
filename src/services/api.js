import axios from "axios";

const api = axios.create({
    baseURL: "https://dreamtrip-api.herokuapp.com/"
})

export default api;