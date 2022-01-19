import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://mysterious-reef-29460.herokuapp.com/api/v1'
});
