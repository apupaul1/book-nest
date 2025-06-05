import React from 'react';
import { motion, time } from 'motion/react';

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
        <div className='w-10/12 mx-auto my-16'>
            <section className=" px-4 ">
                <h2 className="text-3xl font-bold text-center mb-8">📚 Top Picks This Month</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {books.map((book, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{
                                scale: 1.05,
                                transition:{ duration: 0.3}
                            }}
                            className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden py-7 flex items-center"
                        >
                            <img 
                            src={book.image} 
                            alt={book.title} 
                            className="w-[160px] ml-6  object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-3xl font-semibold text-white">{book.title}</h3>
                                <p className='text-white'>By {book.author}</p>
                                <p className="text-sm text-white mt-1">{book.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TopPicks;