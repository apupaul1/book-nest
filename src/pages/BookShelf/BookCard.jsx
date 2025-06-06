import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ singleBook }) => {

    const {_id,book_title,cover_photo,book_author,book_category,upvote} = singleBook;

    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={cover_photo}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book_title}</h2>
                <p>Written By - {book_author}</p>
                <button className=' badge badge-secondary'>{book_category}</button>
                <div className="card-actions">
                    <button className="btn btn-primary">Upvote: {upvote}</button>
                </div>
                <div className='w-1/2 mx-auto mt-8'>
                    <Link to={`/books/${_id}`}><button className='btn btn-neutral'>View Details</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default BookCard;