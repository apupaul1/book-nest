import React from 'react';
import UseAxiosSecure from '../hooks/UseAxiosSecure';

const useMyBookApi = () => {
    const axiosSecure = UseAxiosSecure();

    const myBook = email => {
        return axiosSecure.get(`/books/mybooks?email=${email}`)
        .then(res => res.data)
    }
    return {
        myBook
    };
};

export default useMyBookApi;