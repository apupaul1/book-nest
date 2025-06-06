import React from 'react';
import { useLoaderData } from 'react-router';
import BookCard from './BookCard';

const BookShelf = () => {

    const allBooks = useLoaderData();

    console.log(allBooks);

    return (
        <div className='min-h-screen w-10/12 mx-auto my-12'>
            <h2 className='text-3xl font-extrabold text-center'>Browse All the Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    allBooks.map(singleBook => (<BookCard key={singleBook._id} singleBook={singleBook}></BookCard>))
                }
            </div>
        </div>
    );
};

export default BookShelf;