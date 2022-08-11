import axios from "axios";

export async function postConnexion (email, password){
    return await axios.post(
    `http://localhost:3000/api/auth/login`,
    {
        email,
        password
    }
  )
  .then((res) => {
    return res.data
  })
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


export async function getUserData (token) {
  return axios.get(
      `http://localhost:3000/api/auth/data`,
      {headers: {
          authorization : `Bearer ${token}`
      },
      }
  )
  .then((res) => {
      return res.data
    })
  .catch (() => null)
}

export async function deleteUserAccount (token) {
  return await axios.delete(
    `http://localhost:3000/api/auth/delete`, {
        headers: { Authorization : `Bearer ${token}`},
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}