
import axios from 'axios'
let axios_api = axios.create({
    baseURL: "https://frontend-test-backend.tritronik.com/",    
})

export default axios_api