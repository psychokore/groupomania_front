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



export async function postComment (postid, comment, token){
    return await axios.post(
    `http://localhost:3000/api/comment/${postid}`,
    {
        comment
    },
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