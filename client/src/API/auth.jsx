import axios from "axios";
import { instance } from "./axiosclient";

export async function postConnexion (email, password){
    return await instance.post(
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
  return await instance.post(
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
  return instance.get(
      `http://localhost:3000/api/auth/data`
  )
  .then((res) => {
      return res.data
    })
  .catch (() => null)
}

export async function deleteUserAccount (token) {
  return await instance.delete(
    `http://localhost:3000/api/auth/delete`
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function getRefreshToken (token) {
  return instance.get(
      `http://localhost:3000/api/auth/refresh`,
  )
  .then((res) => {
      return res.data
    })
  .catch (() => null)
}