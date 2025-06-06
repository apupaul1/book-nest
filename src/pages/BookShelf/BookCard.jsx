import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ singleBook }) => {

    const {_id,book_title,cover_photo,book_author,book_category,upvote} = singleBook;

    return (
        <div className="card card-side bg-slate-800 shadow-sm">
            <figure className='w-1/2'>
                <img
                    src={cover_photo}
                    alt="Movie" />
            </figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-white">{book_title}</h2>
                <p className='text-white'>Written By - {book_author}</p>
                <button className=' badge badge-secondary'>{book_category}</button>
                <div className="card-actions">
                    <button className="btn btn-primary">Upvote: {upvote}</button>
                </div>
                <div className='w-full text-center mt-8'>
                    <Link to={`/books/${_id}`}><button className='btn btn-neutral'>View Details</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default BookCard;