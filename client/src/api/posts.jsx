import axios from 'axios';

export const getPosts = (offset) => {
    return axios.get(
        `http://localhost:3000/api/publication?offset=${offset}&limit=10`
        
    )
    .then((res) => {
        return res.data
    })
    .catch (() => null)
}

export async function publishPublication (publication, token){
    return await axios.post(
    `http://localhost:3000/api/publication`,
    {
        publication
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