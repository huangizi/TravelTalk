import axios from "axios/index";


export const postChatMessage = (data:any) => {
    return axios.post('https://ceo-copilot-backend.zeabur.app/api/chat-bot/dialog/',data)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        })
}
