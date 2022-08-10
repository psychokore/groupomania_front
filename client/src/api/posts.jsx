import axios from 'axios';
import { instance } from './axiosclient';

export const getPosts = (offset) => {
    return axios.get(
        `http://localhost:3000/api/publication?offset=${offset}&limit=10`
        
    )
    .then((res) => {
        return res.data
    })
    .catch (() => null)
}

export async function publishPublication (content,image, token){
    return await axios.post(
    `http://localhost:3000/api/publication`,
    {
        content,
        image
    },
    {headers: {
        authorization : `Bearer ${token}`,
        'content-type' : 'multipart/form-data'
    },
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function updatePublication (postid, textUpdate, token){
    return await axios.put(
    `http://localhost:3000/api/publication/${postid}`,
    {
        textUpdate
    },
    {headers: {
        authorization : `Bearer ${token}`,
        'content-type' : 'multipart/form-data'
    },
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function deletePublication (postid, token){
    return await axios.delete(
    `http://localhost:3000/api/publication/${postid}`,
    {headers: {
        authorization : `Bearer ${token}`,
        'content-type' : 'multipart/form-data'
    },
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}