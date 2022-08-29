import axios from "axios";
import { instance } from "./axiosclient";

export const getLikes = (postid) => {
    return instance.get(
        `http://localhost:3000/api/like/${postid}/`
    )
    .then((res) => {
        return res.data
      })
    .catch (() => null)
}


export async function addLike (postid){
    return await instance.post(
    `http://localhost:3000/api/like/${postid}`
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function deleteLike (postid) {
  return await instance.delete(
    `http://localhost:3000/api/like/${postid}`
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}