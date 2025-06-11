import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { motion } from 'motion/react';
import axios from 'axios';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';

const AddBook = () => {
    const { user } = use(AuthContext);
    const email = user.email;
    const name = user.displayName;

    const axiosSecure = UseAxiosSecure();

    const handleAddBooks = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        axiosSecure.post('https://b11-a11-c19-server.vercel.app/books', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Book added sucessfully",
                        showConfirmButton: false,
                        timer: 1500,
                        toast: true
                    });
                }
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className='bg-slate-50 p-8'>
            <motion.div
                className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-2xl border-2 border-gray-300"
                animate={{
                    borderColor: [
                        "#f59e0b", // Amber
                        "#3b82f6", // Blue
                        "#10b981", // Green
                        "#ef4444", // Red
                        "#f59e0b", // Amber (Back to start)
                    ]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                }}
            >
                <h2 className="text-4xl font-semibold text-amber-500 mb-4 text-center">Add a New Book</h2>
                <p className='text-center text-sm text-gray-600 mb-8'>Share your book collection with the community. Add a new book, track its reading status, and contribute to the collection.</p>
                <form
                    onSubmit={handleAddBooks}
                    className="space-y-6">

                    {/* Book Title */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Book Title</label>
                        <input
                            type="text"
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-amber-500"
                            placeholder="Enter book title"
                            name="book_title"
                            required
                        />
                    </div>

                    {/* Book Author */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Book Author</label>
                        <input
                            type="text"
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300  focus:outline-none focus:border-amber-500"
                            placeholder="Enter author's name"
                            name="book_author"
                            required
                        />
                    </div>

                    {/* Book Category */}
                    <div>
                        <label className="text-black block text-sm font-medium mb-1">Book Category</label>
                        <select
                            className="w-full p-3 bg-base-100 border-2 border-gray-300 rounded-lg  focus:outline-none focus:border-amber-500"
                            name='book_category'
                            required
                        >
                            <option>Select category</option>
                            <option>Fiction</option>
                            <option>Non-Fiction</option>
                            <option>Fantasy</option>
                            <option>Mystery</option>
                            <option>Romance</option>
                            <option>Thriller</option>
                            <option>Historical</option>
                        </select>
                    </div>

                    {/* Reading Status */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Reading Status</label>
                        <select
                            className="w-full p-3 bg-base-100 border-2 border-gray-300 rounded-lg  focus:outline-none focus:border-amber-500"
                            name='reading_status'
                            required
                        >
                            <option>Select status</option>
                            <option>Read</option>
                            <option>Reading</option>
                            <option>Want-to-Read</option>
                        </select>
                    </div>

                    {/* Total Pages */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Total Pages</label>
                        <input
                            type="number"
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300  focus:outline-none focus:border-amber-500"
                            placeholder="Enter total pages"
                            name="total_pages"
                            required
                        />
                    </div>

                    {/* Cover Photo URL */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Cover Photo</label>
                        <input
                            type="url"
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300  focus:outline-none focus:border-amber-500"
                            placeholder="Enter cover photo URL"
                            name="cover_photo"
                            required
                        />
                    </div>

                    {/* User Name (Read-Only) */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">User Name</label>
                        <input
                            name="user_name"
                            type="text"
                            className="w-full p-3 rounded-lg bg-gray-200 text-gray-600 border-2 border-gray-300 "
                            value={name}
                            readOnly
                        />
                    </div>

                    {/* User Email (Read-Only) */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">User Email</label>
                        <input
                            name="user_email"
                            type="email"
                            className="w-full p-3 rounded-lg bg-gray-200 text-gray-600 border-2 border-gray-300 "
                            value={email}
                            readOnly
                        />
                    </div>

                    {/* Book Overview */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Book Overview</label>
                        <textarea
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300  focus:outline-none focus:border-amber-500"
                            rows="4"
                            placeholder="Provide a short overview of the book"
                            name="book_overview"
                            required
                        ></textarea>
                    </div>

                    {/* Upvotes (Read-Only) */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Upvotes</label>
                        <input
                            name="upvote"
                            type="number"
                            className="w-full p-3 bg-gray-100 rounded-lg text-gray-600 border-2 border-gray-300"
                            value={0}
                            readOnly
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="w-full p-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-300"
                        >
                            Add Book
                        </button>
                    </div>

                </form>
            </motion.div>
        </div>
    );
};

export default AddBook;
