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



export async function postComment (id, userId, comment, token){
    return await axios.post(
    `http://localhost:3000/api/comment/`,
    {
        comment
    },
    {headers: {
        authorization: `Bearer ${token}`
    },
    params: {
        id
    },
    auth: {
        userId
    }}
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}