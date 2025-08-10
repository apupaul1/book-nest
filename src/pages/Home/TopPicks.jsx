import React from 'react';
import { motion } from 'motion/react';

const TopPicks = () => {
    const books = [
        {
            title: "Atomic Habits",
            label: "Editor's Choice",
            image: "https://i.ibb.co/p6scGM5z/book3.jpg",
            author: "James Clear"
        },
        {
            title: "The Alchemist",
            label: "Bestseller",
            image: "https://i.ibb.co/whDqwprY/book2.jpg",
            author: "Paulo Coelho"
        },
        {
            title: "The Psychology of Money",
            label: "Top Rated",
            image: "https://i.ibb.co/F4L8wc2d/book1.jpg",
            author: "Morgan Housel"
        },
    ];

    return (
        <div className='w-11/12 mx-auto my-12'>
            <section className="px-2">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-slate-800">
                    📚 Top Picks This Month
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                                transition: { duration: 0.25 }
                            }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 transform hover:z-10 cursor-pointer"
                        >
                            <div className="relative mb-3">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-32 h-auto object-cover rounded-md shadow-sm"
                                />
                                <span className="absolute top-1 right-1 bg-indigo-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm">
                                    {book.label}
                                </span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-0.5">
                                    {book.title}
                                </h3>
                                <p className='text-sm text-gray-600 dark:text-gray-300 mb-2'>
                                    By <span className="font-semibold">{book.author}</span>
                                </p>
                                <button className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TopPicks;