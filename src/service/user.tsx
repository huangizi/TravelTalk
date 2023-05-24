import axios from "axios";


export const postLogin = async (data:any) => {
    return axios.post('api/log-in/',data)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}

export const postSignup = (data:any) => {
    return axios.post('https://ceo-copilot-backend.zeabur.app/api/sign-up/',data)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}


export const postGetUserInfoById = (data:any) => {
    return axios.post(`https://ceo-copilot-backend.zeabur.app/api/playground/list?keyword=${data}/`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}

