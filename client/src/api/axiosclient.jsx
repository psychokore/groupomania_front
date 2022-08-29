

import axios from "axios";




 export const instance = axios.create({
    baseURL: `http://localhost:3000/api`
})



//${process.env.REACT_APP_API_URL}