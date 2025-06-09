import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import { FaRegHeart } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { useState } from 'react';
import Swal from 'sweetalert2';

const BookDetails = () => {

    const { user } = use(AuthContext);
    const book = useLoaderData();
    const {
        _id,
        book_title,
        cover_photo,
        total_page,
        book_author,
        book_category,
        reading_status,
        book_overview,
        upvote,
        user_email,
        user_name
    } = book;

    const [status, setStatus] = useState(reading_status);
    const [upvoteCount, setUpvoteCount] = useState(Number(upvote));

    const getNextStatus = (current) => {
        if (current === 'Want to Read') return 'Reading';
        if (current === 'Reading') return 'Read';
        return 'Read';
    };

    const handleStatusUpdate = () => {
        const next = getNextStatus(status);

        setStatus(next);
    };


    const handleUpvote = () => {
        if (user.email === user_email) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You cannot upvote your own book!",
            });
        }

        setUpvoteCount(prev => {
            const newCount = prev + 1;

            fetch(`http://localhost:3000/books/${_id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ upvote: newCount }) 
            });

            return newCount;
        });
    };

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-center my-8 text-3xl font-extrabold'>Book Details</h2>
            <div className="card bg-base-100 shadow-xl lg:w-1/2 mx-auto mb-14 border-3 border-slate-700 p-4 relative">
                <div className='absolute left-8 top-5'>
                    <button
                        onClick={handleUpvote}
                        className='text-amber-500'><FaRegHeart size={30} /></button>
                </div>
                <figure className=''>
                    <img
                        src={cover_photo}
                        alt="Shoes"
                        className=" w-[200px] object-cover rounded-t-lg" />
                </figure>
                <div className="card-body">
                    <div className='text-center'>
                        <p>Added By {user_name}</p>
                        <p>Email - {user_email}</p>
                    </div>
                    <hr className='border-dashed text-gray-400' />
                    <h2 className="text-center">Book : {book_title}</h2>
                    <hr className='border-dashed text-gray-400' />
                    <p className='text-center'>Overview : {book_overview}</p>
                    <hr className='border-dashed text-gray-400' />
                    <p className='text-center'>Catagory : <span className="badge badge-primary font-bold">{book_category}</span> </p>
                    <hr className='border-dashed text-gray-400' />
                    <h2 className='text-center '>Total Page : {Number(total_page)}</h2>
                    <hr className='border-dashed text-gray-400' />
                    <p className='text-center'>Written By : {book_author}</p>
                    <hr className='border-dashed text-gray-400' />

                    {
                        user && user.email === user_email ? (
                            <div className='text-center'>
                                <p>Status: <span className='font-semibold text-blue-600'>{status}</span></p>
                                {
                                    status !== 'Read' && (
                                        <button onClick={handleStatusUpdate} className="btn btn-sm btn-accent mt-2">
                                            Mark as "{getNextStatus(status)}"
                                        </button>
                                    )
                                }
                            </div>
                        ) : (
                            <p className='text-center'>Status : {status}</p>
                        )
                    }

                    <hr className='border-dashed text-gray-400' />
                    <p className='text-center'>Upvote : {upvoteCount}</p>
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
