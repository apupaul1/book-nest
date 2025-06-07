import React, { useState, useRef, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import BookCard from './BookCard';
import { TbFilterSearch } from "react-icons/tb";

const BookShelf = () => {
    const allBooks = useLoaderData();

    const [showFilter, setShowFilter] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const filterRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setShowFilter(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredBooks = allBooks.filter((book) => {
        const matchesSearch =
            book.book_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.book_author.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter
            ? book.reading_status === statusFilter
            : true;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className='min-h-screen w-10/12 mx-auto my-12'>
            <h2 className='text-3xl font-extrabold text-center'>Browse All the Books</h2>

            {/* Search & Filter */}
            <div className='w-10/12 mx-auto mt-8 flex flex-col md:flex-row gap-3 items-start md:items-center'>

                {/* Search Bar */}
                <label className="input w-full md:w-[900px] flex items-center gap-2 rounded-2xl border px-4 py-2 shadow-sm">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </g>
                    </svg>
                    <input
                        type="search"
                        className="grow outline-none"
                        placeholder="Search your books by book title or author"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>

                <div className="relative" ref={filterRef}>
                    <button
                        onClick={() => setShowFilter(!showFilter)}
                        className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <TbFilterSearch size={20} className="animate-pulse" />
                        Filter
                    </button>

                    {showFilter && (
                        <div className="absolute top-full mt-2 left-0 bg-white border shadow-xl rounded-xl z-10 px-4 py-3 w-60">
                            <p className="text-sm font-semibold mb-2 text-gray-700">Filter by Status</p>
                            <select
                                className="select select-bordered w-full"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="">All Status</option>
                                <option value="Read">Read</option>
                                <option value="Reading">Reading</option>
                                <option value="Want-to-Read">Want-to-Read</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>

            <div className='mt-10'>
                {filteredBooks.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {filteredBooks.map(singleBook => (
                            <BookCard key={singleBook._id} singleBook={singleBook} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-xl font-semibold text-red-500">No books found by this book title or author</p>
                )}
            </div>

        </div>
    );
};

export default BookShelf;
