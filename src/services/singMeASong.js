import axios from "axios"
import { api } from "./apiUrl"

function getTopSongs({ amount }) {
    const promise = axios.get(`${api}/recommendations/top/${amount}`);
    return promise;
}

export {
    getTopSongs,
}
