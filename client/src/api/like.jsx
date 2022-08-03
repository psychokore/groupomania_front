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