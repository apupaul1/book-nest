import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const BookDetails = () => {

    const book = useLoaderData();
    const { book_title, cover_photo, total_page, book_author, book_category, reading_status, book_overview, upvote, email, name } = book;

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-center my-8 text-3xl font-extrabold'>Book Details</h2>
            <div className="card bg-base-100 shadow-xl lg:w-1/2 mx-auto mb-14 border-3 border-slate-700 p-4">
                <figure className=''>
                    <img
                        src={cover_photo}
                        alt="Shoes"
                        className=" object-cover 
                          rounded-t-lg" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center">Book : {book_title}</h2>
                    <hr className='border-dashed text-gray-400' />
                    <p className='text-center'>Overview : {book_overview}</p>
                    <hr className='border-dashed text-gray-400' />
                    <p className='text-center'>Catagory : <span className="badge badge-primary font-bold">{book_category}</span> </p>
                    <hr className='border-dashed text-gray-400' />
                    <h2 className='text-center '>Total Page : {total_page}</h2>
                    <hr className='border-dashed text-gray-400' />
                    <p className='text-center'>Written By : {book_author}</p>
                    <hr className='border-dashed text-gray-400' />
                    <p className='text-center'>Status : {reading_status}</p>
                    <hr className='border-dashed text-gray-400' />
                    <p className='text-center'>Upvote : {upvote}</p>
                    <div className="justify-end">
                        <Link className='flex justify-center' to={'/bookshelf'}>
                            <button className='w-full btn btn-neutral mt-2'>Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;