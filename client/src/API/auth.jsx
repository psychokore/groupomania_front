import axios from "axios";

export async function postConnexion (email, password){
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

export async function postSignup (email, password){
  axios({
  method: "post",
  url:`http://localhost:3000/api/auth/signup`,
  withCredentials: true,
  data: {
      email,
      password,
      firstname,
      lastname
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




//${process.env.REACT_APP_API_URL}