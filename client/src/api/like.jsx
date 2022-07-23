import axios from "axios";

export const getLikes = () => {
    return axios.get(
        `http://localhost:3000//api/publication/:id/like`
    )
    .then ((res) => {
        return res.data
    })
    .catch (() => null)
}


export async function addLike (like){
    return await axios.post(
    `http://localhost:3000/api/publication/:id/like`,
    {
        like
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}