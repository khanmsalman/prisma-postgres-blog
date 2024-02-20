import axios from "axios";

const API = axios.create({ baseURL:"http://localhost:8000" });
const URL = "http://localhost:8000"
API.interceptors.request.use((req)=>{
    if(localStorage.getItem("token")){
        req.headers.Authorization = localStorage.getItem("token")
    }
    return req;
})

export const getPosts=async()=>{
    try {
        const res = await axios.get('http://localhost:8000/post/get')
        return res.data;
    } catch (error) {
        console.log("error in client while get posts",error)
    }
}

export const savePost=async(data)=>{
    const res = await axios.post('http://localhost:8000/post', data)
    return res.data;
}

export const userSignup=async(data)=>{
    const res = await axios.post(`${URL}/user/register`,data)
    return res.data
}

export const userLogin=async(data)=>{
    try {
        const res = await axios.post(`${URL}/user/login`,data);
        return res.data;
    } catch (error) {
        
    }
}