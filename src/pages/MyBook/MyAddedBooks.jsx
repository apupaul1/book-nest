import React, { use } from 'react';

const MyAddedBooks = ({ addedBooks }) => {
    const books = use(addedBooks)

    return (
        <div className='min-h-screen mt-12'>
            <div className="overflow-x-auto bg-amber-200 rounded-2xl p-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th >Book Name</th>
                            <th  className='text-center'>Book Details</th>
                            <th  className='text-center'>Book Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            books.map((book,index) => <tr key={book._id}>
                                <th>
                                    {index+1}
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
                                    <button className='btn mr-4'>Update</button>
                                    <button className="btn ">Delete</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAddedBooks;