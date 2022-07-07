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
/*const url = 'http://localhost:3000/api/auth/signup';
    const data = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password
    };

    fetch(url,{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
      }
    })
*/
export default postConnexion



//${process.env.REACT_APP_API_URL}