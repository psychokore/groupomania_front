import axios from 'axios';

export const getPosts = () => {
    return axios.get(
        `http://localhost:3000/api/publication?offset=0&limit=10`
        
    )
    .then((res) => {
        return res.data
    })
    .catch (() => null)
}

export async function publishPost (publication, image){
    return await axios.post(
    `http://localhost:3000/api/publication`,
    {
        publication,
        image
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}