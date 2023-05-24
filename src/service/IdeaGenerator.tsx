import axios from "axios";


export const getIdeaDomain = () => {
    return axios.get("https://ceo-copilot-backend.zeabur.app/api/idea-generator/domain/")
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        })
}

export const postIdeaGeneratorStep1 = (data:any) => {
    return axios.post('https://ceo-copilot-backend.zeabur.app/api/idea-generator/step1/',data)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        })
}

export const postIdeaGeneratorStep2 = (data:any) => {
    return axios.post('https://ceo-copilot-backend.zeabur.app/api/idea-generator/step2/',data)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        })
}

