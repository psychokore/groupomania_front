import axios from "axios";

export const getLikes = (postid, token) => {
    return axios.get(
        `http://localhost:3000/api/like/${postid}/`,
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


export async function addLike (postid, token){
    return await axios.post(
    `http://localhost:3000/api/like/${postid}`, null, {
        headers: { Authorization : `Bearer ${token}`},
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function deleteLike (postid, token) {
  return await axios.delete(
    `http://localhost:3000/api/like/${postid}`, {
        headers: { Authorization : `Bearer ${token}`},
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}