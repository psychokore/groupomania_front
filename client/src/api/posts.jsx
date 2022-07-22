import axios from 'axios';

export const getPosts = () => {
    return axios.get(
        `http://localhost:3000/api/publication`
        
    )
    .then((res) => {
        return res.data
    })
    .catch (() => null)
}