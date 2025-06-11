import React, { use } from 'react';
import { motion } from 'motion/react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';

const UpdateBook = ({ book, onUpdateSuccess }) => {
    const { _id } = book;
    const { user } = use(AuthContext)
    const email = user.email;
    const name = user.displayName

    const axiosSecure = UseAxiosSecure();

    const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedBook = Object.fromEntries(formData.entries());

        axiosSecure.put(`/books/${_id}`, updatedBook)
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Updated successfully',
                        showConfirmButton: false,
                        timer: 1500,
                        toast: true,
                    });

                    if (onUpdateSuccess) {
                        onUpdateSuccess({ ...book, ...updatedBook });
                    }
                    const modal = document.getElementById("my_modal_5");
                    if (modal) modal.close();
                }
            });
    };

    return (
        <div className='bg-slate-50 p-8'>
            <motion.div
                className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-2xl border-2 border-gray-300"
                animate={{
                    borderColor: [
                        "#f59e0b",
                        "#3b82f6",
                        "#10b981",
                        "#ef4444",
                        "#f59e0b",
                    ]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                }}
            >
                <h2 className="text-4xl font-semibold text-amber-500 mb-4 text-center">Update Book Information</h2>
                <p className='text-center text-sm text-gray-600 mb-8'>Share your book collection with the community. Update the book details to keep the records fresh.</p>
                <form onSubmit={handleUpdateBook} className="space-y-6">
                    {/* Book Title */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Book Title</label>
                        <input
                            type="text"
                            name="book_title"
                            defaultValue={book.book_title}
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-amber-500"
                            placeholder="Enter book title"
                            required
                        />
                    </div>

                    {/* Book Author */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Book Author</label>
                        <input
                            type="text"
                            name="book_author"
                            defaultValue={book.book_author}
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-amber-500"
                            placeholder="Enter author's name"
                            required
                        />
                    </div>

                    {/* Book Category */}
                    <div>
                        <label className="text-black block text-sm font-medium mb-1">Book Category</label>
                        <select
                            name='book_category'
                            defaultValue={book.book_category}
                            className="w-full p-3 bg-base-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                            required
                        >
                            <option disabled>Select category</option>
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
                            name='reading_status'
                            defaultValue={book.reading_status}
                            className="w-full p-3 bg-base-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                            required
                        >
                            <option disabled>Select status</option>
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
                            name="total_pages"
                            defaultValue={book.total_pages}
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-amber-500"
                            placeholder="Enter total pages"
                            required
                        />
                    </div>

                    {/* Cover Photo URL */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Cover Photo</label>
                        <input
                            type="url"
                            name="cover_photo"
                            defaultValue={book.cover_photo}
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-amber-500"
                            placeholder="Enter cover photo URL"
                            required
                        />
                    </div>

                    {/* User Name (Read-Only) */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">User Name</label>
                        <input
                            name="user_name"
                            type="text"
                            value={name}
                            className="w-full p-3 rounded-lg bg-gray-200 text-gray-600 border-2 border-gray-300"
                            readOnly
                        />
                    </div>

                    {/* User Email (Read-Only) */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">User Email</label>
                        <input
                            name="user_email"
                            type="email"
                            value={email}
                            className="w-full p-3 rounded-lg bg-gray-200 text-gray-600 border-2 border-gray-300"
                            readOnly
                        />
                    </div>

                    {/* Book Overview */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Book Overview</label>
                        <textarea
                            name="book_overview"
                            defaultValue={book.book_overview}
                            className="w-full p-3 bg-base-100 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-amber-500"
                            rows="4"
                            placeholder="Provide a short overview of the book"
                            required
                        ></textarea>
                    </div>

                    {/* Upvotes (Read-Only) */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">Upvotes</label>
                        <input
                            name="upvote"
                            type="number"
                            value={book.upvotes || 0}
                            readOnly
                            className="w-full p-3 bg-gray-100 rounded-lg text-gray-600 border-2 border-gray-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="w-full p-3 bg-neutral text-white rounded-lg hover:bg-amber-600 transition-all duration-300"
                        >
                            Update Book
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default UpdateBook;
