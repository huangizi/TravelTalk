import axios from 'axios';

const API_URL = '/example/';

export const getExampleData = () => {
  return axios.get(API_URL)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const postExampleData = (data) => {
  return axios.post(API_URL, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};
