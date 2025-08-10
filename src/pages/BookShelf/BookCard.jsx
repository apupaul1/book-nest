import React from 'react';
import { Link } from 'react-router';
import { FaArrowUp, FaBookOpen } from 'react-icons/fa';

const BookCard = ({ singleBook }) => {

    const { _id, book_title, cover_photo, book_author, book_category, upvote } = singleBook;

    return (
        <div className="card card-side bg-slate-800 shadow-sm flex flex-col ">
            <figure className='w-3/6 mx-auto'>
                <img
                    src={cover_photo}
                    alt="Movie" />
            </figure>
            <div className="card-body mx-auto">
                <h2 className="card-title text-white">{book_title}</h2>
                <p className='text-white'>Written By - {book_author}</p>
                <button className='badge badge-secondary'>{book_category}</button>
                <div className="flex gap-4 mt-4">
                    {/* Upvote Button */}
                    <button className="flex text-xs items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 text-white font-bold">
                        <FaArrowUp className="text-white" /> <span>Upvote: {upvote}</span>
                    </button>

                    {/* View Details */}
                    <Link to={`/books/${_id}`}>
                        <button className="flex text-xs items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 text-white font-bold">
                            <FaBookOpen /> View Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default BookCard;