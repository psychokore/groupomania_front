import axios from "axios";

async function postConnexion (email, password){
    axios({
    method: "post",
    url:`http://localhost:3000/api/auth/login`,
    withCredentials: true,
    data: {
        email,
        password
    }
})
}


export default postConnexion



//${process.env.REACT_APP_API_URL}