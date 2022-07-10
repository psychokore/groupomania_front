import axios from "axios";

export async function postConnexion (email, password){
    return await axios.post(
    `http://localhost:3000/api/auth/login`,
    {
        email,
        password
    }
  )
  .then (d => d.data)
  .catch (() => null)
}


export async function postInscription (email, password, firstname, lastname){
  return await axios.post(
  `http://localhost:3000/api/auth/signup`,
  {
      email,
      password,
      firstname,
      lastname
  }
)
  .then (d => d.data)
  .catch (() => null)
}


//${process.env.REACT_APP_API_URL}