import axios from "axios";

export const getComments = ( postid, offset) => {
    return axios.get(
        `http://localhost:3000/api/comment/${postid}/comment?offset=${offset}&limit=10`
    )
    .then ((res) => {
        return res.data
    })
    .catch (() => null)
}

export async function publishComment (comment){
    return await axios.post(
    `http://localhost:3000/api/comment/:id/comment`,
    {
        comment
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}