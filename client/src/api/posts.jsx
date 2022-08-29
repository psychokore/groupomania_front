import axios from 'axios';
import { instance } from './axiosclient';

export const getPosts = (offset) => {
    return instance.get(
        `http://localhost:3000/api/publication?offset=${offset}&limit=10`
        
    )
    .then((res) => {
        return res.data
    })
    .catch (() => null)
}

export async function publishPublication (content,image){
    return await instance.post(
    `http://localhost:3000/api/publication`,
    {
        content,
        image
    },
    {headers: {
        'content-type' : 'multipart/form-data'
    },
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function updatePublication (postid, textUpdate){
    return await instance.put(
    `http://localhost:3000/api/publication/${postid}`,
    {
        textUpdate
    },
    {headers: {
        'content-type' : 'multipart/form-data'
    },
    }
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}

export async function deletePublication (postid){
    return await instance.delete(
    `http://localhost:3000/api/publication/${postid}`
  )
  .then((res) => {
    return res.data
  })
  .catch (() => null)
}