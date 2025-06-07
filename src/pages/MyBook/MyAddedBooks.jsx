
import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import UpdateBook from '../UpdateBook/UpdateBook';

const MyAddedBooks = ({ addedBooks }) => {
    const books = use(addedBooks)
    const [deleteBook, setDeleteBook] = useState(books)
    const [updateBooks, setUpdateBooks] = useState(null)

    const handleBookDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/books/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // remove coffee

                            const reamainingBooks = deleteBook.filter(del => del._id !== _id)
                            setDeleteBook(reamainingBooks)

                        }
                        
                    })
            }
        });
    }


    const updateBook = (book) => {
        setUpdateBooks(book);
        const modal = document.getElementById('my_modal_5')

        if (modal) {
            modal.showModal()
        }
    }



    return (
        <div className='min-h-screen mt-12'>
            <div className="overflow-x-auto bg-amber-200 rounded-2xl p-4">
                {
                    deleteBook.length <= 0 ?
                        <div className='text-center'>

                            <p className='text-center text-gray-700 text-2xl font-bold my-6'>No Books here
                            </p>
                            <p className='text-center text-xl font-bold'>
                                Go to Add Book page to add a Book
                            </p>
                            <Link
                                className='btn btn-neutral my-4'
                                to={'/addbooks'}>
                                Add Book
                            </Link>

                        </div> :
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                    </th>
                                    <th >Book Name</th>
                                    <th className='text-center'>Book Details</th>
                                    <th className='text-center'>Book Status</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    deleteBook.map((book, index) => <tr key={book._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3 ">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={book.cover_photo}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold">{book.book_title}</h1>
                                                    <p className="text-sm font-bold opacity-70">{book.book_author}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {book.book_category}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Reading Status : {book.reading_status}</span>

                                        </td>
                                        <td className='flex justify-center'>
                                            <button
                                                className='btn mr-4'
                                                onClick={() => updateBook(book)}>Update</button>

                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    {
                                                        updateBooks && (
                                                            <UpdateBook book={updateBooks} ></UpdateBook>
                                                        )
                                                    }
                                                </div>
                                            </dialog>

                                            <button
                                                onClick={() => handleBookDelete(book._id)}
                                                className="btn btn-error">Delete</button>
                                        </td>

                                    </tr>)
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default MyAddedBooks;