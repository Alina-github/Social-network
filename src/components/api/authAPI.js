import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "7f7108c9-f9f8-4f7c-9eda-43f2e2e21491",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'}
);

export const authAPI = {
    getAuth() {
        return instance
            .get(`auth/me`)
    },

    postLogin( params ) {
        return instance
            .post(`auth/login`, null, { params: {...params}})
    },

    deleteLogin()  {
        return instance
            .delete(`auth/login`)
    },
}
