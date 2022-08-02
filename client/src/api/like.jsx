import axios from "axios";

export const getLikes = ( postid, offset) => {
    return axios.get(
        `http://localhost:3000/api/like/${postid}/`
    )
    .then ((res) => {
        return res.data
    })
    .catch (() => null)
}