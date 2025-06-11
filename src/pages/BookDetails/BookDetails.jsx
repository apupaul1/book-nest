import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import { FaRegHeart, FaRegCommentDots } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';


const BookDetails = () => {
    const { user } = useContext(AuthContext);
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
    const [reviews, setReviews] = useState([]);
    const [showReviewBox, setShowReviewBox] = useState(false);
    const [editingReviewId, setEditingReviewId] = useState(null);
    const [editText, setEditText] = useState("");


    useEffect(() => {
        fetch(`https://b11-a11-c19-server.vercel.app/reviews?book_id=${_id}`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(r => r.book_id === _id);
                setReviews(filtered);
            });
    }, [_id]);

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const reviewText = form.review.value;

        const alreadyReviewed = reviews.some(
            r => r.user_email === user.email
        );

        if (alreadyReviewed) {
            return Swal.fire({
                icon: "warning",
                title: "You've already reviewed this book",
                toast: true,
                timer: 2000,
                position: 'top-end',
                showConfirmButton: false
            });
        }

        const data = {
            book_id: _id,
            user_email: user.email,
            review_text: reviewText
        };

        axios.post('https://b11-a11-c19-server.vercel.app/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Review posted successfully",
                        showConfirmButton: false,
                        timer: 1500,
                        toast: true
                    });
                    setReviews(prev => [...prev, data]);
                    form.reset();
                    setShowReviewBox(false); // ✅ Auto-hide review box
                }
            })
            .catch(console.log);
    };

    const getNextStatus = (current) => {
        if (current === 'Want to Read') return 'Reading';
        if (current === 'Reading') return 'Read';
        return 'Read';
    };

    const handleStatusUpdate = () => {
        const readingStatus = getNextStatus(status);
        setStatus(readingStatus);

        fetch(`https://b11-a11-c19-server.vercel.app/books/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reading_status: readingStatus })
        });
    };

    const handleUpvote = () => {

        if (!user) {
            return Swal.fire({
                icon: 'error',
                title: 'Login Required',
                text: 'Please login to upvote this book.',
                confirmButtonText: 'OK',
                timer: 3000,
                showConfirmButton: true
            });
        }

        if (user.email === user_email) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You cannot upvote your own book!",
            });
        }

        setUpvoteCount(prev => {
            const newCount = prev + 1;

            fetch(`https://b11-a11-c19-server.vercel.app/books/${_id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ upvote: newCount })
            });

            return newCount;
        });
    };

    const handleReviewDelete = (reviewId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://b11-a11-c19-server.vercel.app/reviews/${reviewId}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            setReviews(prev => prev.filter(r => r._id !== reviewId));
                            Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
                        } else {
                            Swal.fire('Error', 'Could not delete the review.', 'error');
                        }
                    })
                    .catch(error => {
                        Swal.fire('Error', 'Failed to delete review.', 'error');
                    });
            }
        });
    };

    const handleReviewUpdate = async (id) => {
        const res = await fetch(`https://b11-a11-c19-server.vercel.app/reviews/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ review_text: editText }),
        });

        if (res.ok) {
            setReviews((prevReviews) =>
                prevReviews.map((review) =>
                    review._id === id ? { ...review, review_text: editText } : review
                )
            );

            setEditingReviewId(null);
            setEditText("");
        }
    };





    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-center my-8 text-3xl font-extrabold'>📖 Book Details</h2>
            <div className="card bg-white shadow-2xl lg:w-1/2 mx-auto mb-14 border border-gray-200 p-6 rounded-xl relative transition duration-300 hover:shadow-inner">
                <div className='absolute left-8 top-5'>
                    <button onClick={handleUpvote} className='text-amber-500 hover:scale-110 transition-transform duration-200'>
                        <FaRegHeart size={30} />
                    </button>
                </div>
                <figure className='flex justify-center'>
                    <img src={cover_photo} alt="cover" className="w-[200px] object-cover rounded-lg shadow-md" />
                </figure>
                <div className="card-body">
                    <div className='text-center mb-4'>
                        <p>Added by: <strong>{user_name}</strong></p>
                        <p>Email: {user_email}</p>
                    </div>

                    <hr className='border-dashed border-gray-300 my-2' />
                    <h2 className="text-center text-xl font-bold">📘 {book_title}</h2>
                    <p className='text-center text-gray-700'>Overview: {book_overview}</p>
                    <p className='text-center'>Category: <span className="badge badge-primary">{book_category}</span></p>
                    <p className='text-center'>Total Pages: {Number(total_page)}</p>
                    <p className='text-center'>Author: {book_author}</p>

                    {
                        user && user.email === user_email ? (
                            <div className='text-center mt-3'>
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
                            <p className='text-center mt-3'>Status: {status}</p>
                        )
                    }

                    <div className="mt-6 border-t pt-3 flex justify-around items-center">
                        <button onClick={handleUpvote} className="flex items-center gap-2 text-red-500 hover:text-red-700">
                            <FaRegHeart /> <span>Upvote ({upvoteCount})</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                if (!user) {
                                    return Swal.fire({
                                        icon: 'error',
                                        title: 'Login Required',
                                        text: 'Please login to upvote this book.',
                                        confirmButtonText: 'OK',
                                        timer: 3000,
                                        showConfirmButton: true
                                    });
                                }
                                setShowReviewBox(prev => !prev);
                            }}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                            <FaRegCommentDots /> Leave a Review
                        </button>

                    </div>

                    {
                        showReviewBox && (
                            <form onSubmit={handleReview} className="mt-4 animate-fade-in">
                                <textarea
                                    name='review'
                                    id="reviewInput"
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Write your review here..."
                                    required
                                />
                                <button className='btn btn-neutral w-full mt-2' type='submit'>Post Review</button>
                            </form>
                        )
                    }

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold mb-2">All Reviews:</h3>
                        {
                            reviews.length === 0 ? <p>No reviews yet.</p> :
                                <div className='bg-gray-100'>
                                    <ul className="space-y-2">
                                        {reviews.map((r, i) => (
                                            <li key={i} className="p-3 rounded-md bg-white shadow-sm">
                                                <p className="text-sm text-gray-600 font-medium">{r.user_email}</p>

                                                {editingReviewId === r._id ? (
                                                    <textarea
                                                        className="w-full p-2 border rounded"
                                                        value={editText}
                                                        onChange={(e) => setEditText(e.target.value)}
                                                    />
                                                ) : (
                                                    <p className="text-base">{r.review_text}</p>
                                                )}

                                                {user?.email === r.user_email && (
                                                    <div className="mt-1 flex gap-2">
                                                        {editingReviewId === r._id ? (
                                                            <>
                                                                <button
                                                                    onClick={() => handleReviewUpdate(r._id)}
                                                                    className="btn btn-sm btn-success"
                                                                >
                                                                    Save
                                                                </button>
                                                                <button
                                                                    onClick={() => setEditingReviewId(null)}
                                                                    className="btn btn-sm btn-outline"
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    onClick={() => {
                                                                        setEditingReviewId(r._id);
                                                                        setEditText(r.review_text);
                                                                    }}
                                                                    className="btn btn-sm btn-info"
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    onClick={() => handleReviewDelete(r._id)}
                                                                    className="btn btn-sm btn-error"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                )}
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                        }
                    </div>

                    <div className="text-center mt-6">
                        <Link to='/bookshelf'>
                            <button className='btn w-full btn-neutral'>← Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
