import axios from "axios";

export default axios.create({
    baseURL: 'https://dummyapi.io/data/v1/',
    headers: {
        'app-id': '6315db90b9a47281bd6e86df'
    }
})