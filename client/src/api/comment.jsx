import axios from "axios";
import { instance } from "./axiosclient";


export const getComments = ( postid, offset) => {
    return instance.get(
        `http://localhost:3000/api/comment/${postid}/comment?offset=${offset}&limit=10`
    )
    .then ((res) => {
        return res.data
    })
    .catch (() => null)
}



export async function postComment (commentid, comment, token){
    return await instance.post(
    `http://localhost:3000/api/comment/${commentid}`,
    {
        comment
    },
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function deleteComment (commentid, token) {
    return await instance.delete(
      `http://localhost:3000/api/comment/${commentid}`
    )
    .then((res) => {
      return res.data
    })
    .catch (() => null)
  }

  export async function updateComment(commentid, textUpdate, token){
    return await instance.put(
    `http://localhost:3000/api/comment/${commentid}`,
    {
        textUpdate
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}