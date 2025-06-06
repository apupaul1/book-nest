import React from 'react';
import { useLoaderData } from 'react-router';
import BookCard from './BookCard';

const BookShelf = () => {

    const allBooks = useLoaderData();

    console.log(allBooks);

    return (
        <div className='min-h-screen w-10/12 mx-auto my-12'>
            <h2 className='text-3xl font-extrabold text-center'>Browse All the Books</h2>
            <div className='text-center w-10/12 mx-auto mt-8'>
                            <label className="input w-full">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow" placeholder="Search your books" />
            </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    allBooks.map(singleBook => (<BookCard key={singleBook._id} singleBook={singleBook}></BookCard>))
                }
            </div>
        </div>
    );
};

export default BookShelf;