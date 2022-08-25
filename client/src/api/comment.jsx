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



export async function postComment (commentid, comment, token){
    return await axios.post(
    `http://localhost:3000/api/comment/${commentid}`,
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

export async function deleteComment (commentid, token) {
    return await axios.delete(
      `http://localhost:3000/api/comment/${commentid}`, {
          headers: { Authorization : `Bearer ${token}`},
      }
    )
    .then((res) => {
      return res.data
    })
    .catch (() => null)
  }

  export async function updateComment(commentid, textUpdate, token){
    return await axios.put(
    `http://localhost:3000/api/comment/${commentid}`,
    {
        textUpdate
    },
    {headers: {
        authorization : `Bearer ${token}`,
    },
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}