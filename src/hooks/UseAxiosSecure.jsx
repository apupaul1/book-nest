import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const axiosInstance = axios.create({
    baseURL: 'https://b11-a11-c19-server.vercel.app'
})

const UseAxiosSecure = () => {

    const { user, userSignOut } = use(AuthContext)

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    });

    // Response interceptor

    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {

        if (error.status === 401 || error.status === 403) {
            userSignOut()
                .then(() => {
                    console.log('sign out user for 401 status code')
                })
                .catch(err => {
                    console.log(err)
                })

        }
        return Promise.reject(error);
    })


    return axiosInstance;
};

export default UseAxiosSecure;