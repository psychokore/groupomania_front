
import { instance } from "./axiosclient";

export async function postConnexion (email, password){
    return await instance.post(
    `/auth/login`,
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
  return await instance.post(
  `/auth/signup`,
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


export async function getUserData () {
  return instance.get(
      `/auth/data`
  )
  .then((res) => {
      return res.data
    })
  .catch (() => null)
}

export async function deleteUserAccount () {
  return await instance.delete(
    `/auth/delete`
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function getRefreshToken () {
  return instance.get(
      `/auth/refresh`,
  )
  .then((res) => {
      return res.data
    })
  .catch (() => null)
}