import axios from "axios";

export const getComments = () => {
    return axios.get(
        `http://localhost:3000//api/publication/:id/comment?offset=0&limit=10`
    )
    .then ((res) => {
        return res.data
    })
    .catch (() => null)
}

export async function publishComment (comment){
    return await axios.post(
    `http://localhost:3000/api/publication/:id/comment`,
    {
        comment
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}