import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import UpdateBook from '../UpdateBook/UpdateBook';
import { Pencil, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';

const MyAddedBooks = ({ addedBooks }) => {
    const books = use(addedBooks);
    const [deleteBook, setDeleteBook] = useState(books);
    const [updateBooks, setUpdateBooks] = useState(null);

    const axiosSecure = UseAxiosSecure();

    const handleBookDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/books/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Book has been removed.",
                                icon: "success"
                            });
                            const remainingBooks = deleteBook.filter(book => book._id !== _id);
                            setDeleteBook(remainingBooks);
                        }
                    });
            }
        });
    };

    const handleBookUpdate = (updatedBook) => {
        setDeleteBook(prevBooks =>
            prevBooks.map(book => book._id === updatedBook._id ? updatedBook : book)
        );
    };

    const updateBook = (book) => {
        setUpdateBooks(book);
        const modal = document.getElementById('my_modal_5');
        if (modal) modal.showModal();
    };

    return (
        <div className='min-h-screen mt-12 px-6'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {deleteBook.length === 0 ? (
                    <div className='col-span-full text-center bg-yellow-50 p-6 rounded-xl shadow animate-pulse'>
                        <h2 className='text-2xl font-semibold text-gray-700 mb-2'>No Books Found</h2>
                        <p className='text-gray-600 mb-4'>Click below to add a new book to your collection.</p>
                        <Link to="/addbooks" className="btn btn-neutral btn-wide shadow">
                            Add Book
                        </Link>
                    </div>
                ) : (
                    <AnimatePresence>
                        {deleteBook.map((book) => (
                            <motion.div
                                key={book._id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-5 border hover:border-blue-400"
                            >
                                <div className="flex items-start gap-4">
                                    <img
                                        src={book.cover_photo}
                                        alt="Book Cover"
                                        className="h-24 w-20 rounded-xl object-cover border shadow"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800">{book.book_title}</h3>
                                        <p className="text-sm text-gray-500">{book.book_author}</p>
                                        <div className="mt-3 space-x-2">
                                            <span className="badge badge-outline badge-info">{book.book_category}</span>
                                            <span className="badge badge-outline badge-success">{book.reading_status}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 flex justify-end gap-2">
                                    <button
                                        onClick={() => updateBook(book)}
                                        className="btn btn-sm btn-outline btn-primary flex items-center gap-1 transition hover:scale-105"
                                    >
                                        <Pencil className="w-4 h-4" /> Update
                                    </button>
                                    <button
                                        onClick={() => handleBookDelete(book._id)}
                                        className="btn btn-sm btn-outline btn-error flex items-center gap-1 transition hover:scale-105"
                                    >
                                        <Trash2 className="w-4 h-4" /> Delete
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle backdrop-blur">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.4 }}
                    className="modal-box rounded-2xl shadow-lg border border-gray-200"
                >
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-red-500">✕</button>
                    </form>
                    {updateBooks && (
                        <UpdateBook onUpdateSuccess={handleBookUpdate} book={updateBooks} />
                    )}
                </motion.div>
            </dialog>
        </div>
    );
};

export default MyAddedBooks;
