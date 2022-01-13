import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTg4NmQyNDg3NmY4NGFhODliOWUwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjA3ODAxOSwiZXhwIjoxNjQyMzM3MjE5fQ.IQWXEIZWnU0n5Iu183Dyf0GLh4qX-DccyUs36eh4iQc";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userReuquest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}` },
});