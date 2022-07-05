import axios from "axios";

async function postConnexion (email, password){
    axios({
    method: "post",
    url:`${process.env.REACT_APP_API_URL}api/auth/login`,
    withCredentials: true,
    data: {
        email,
        password
    }
})
}


export default postConnexion



//${process.env.REACT_APP_API_URL}