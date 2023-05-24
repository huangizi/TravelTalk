import axios from "axios";


export const getPlaygroundCard = () => {
    return axios.get('https://ceo-copilot-backend.zeabur.app/api/playground/list/')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        })
}

export const searchPlaygroundCard = (data: any) => {
    return axios.get(`https://ceo-copilot-backend.zeabur.app/api/playground/list?keyword=${data}/`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        })
}
