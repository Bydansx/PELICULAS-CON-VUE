import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjZlYTcyMjE2YjQ4NjVjYmUwMzQxNTcxYmNlYTAzNiIsIm5iZiI6MTc2NzgzMjkxMC4xNTM5OTk4LCJzdWIiOiI2OTVlZmQ0ZTUxMTEzY2NkNWIwOGFhY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rDeuwUawa-U9JFSgFtd5oSwRmOn5MVJlWlxqFBkyPtU";


export const apiInstanceMovie = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${API_KEY} `,
        'Content-Type': 'application/json',
    },
})