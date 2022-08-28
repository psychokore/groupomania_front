import axios from "axios";
import { instance } from "./axiosclient";

export const getLikes = (postid, token) => {
    return instance.get(
        `http://localhost:3000/api/like/${postid}/`
    )
    .then((res) => {
        return res.data
      })
    .catch (() => null)
}


export async function addLike (postid, token){
    return await instance.post(
    `http://localhost:3000/api/like/${postid}`
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function deleteLike (postid, token) {
  return await instance.delete(
    `http://localhost:3000/api/like/${postid}`
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}