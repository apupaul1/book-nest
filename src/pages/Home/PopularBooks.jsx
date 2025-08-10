import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loveLottie from '../../assets/lottie/Animation - 1749140871253.json'
import { motion } from 'framer-motion';
import Loading from '../Shared/Loading'

const PopularBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://b11-a11-c19-server.vercel.app/books')
            .then(res => res.json())
            .then(data => {
                const sortedBooks = data
                    .sort((a, b) => (b.upvote || 0) - (a.upvote || 0))
                    .slice(0, 8);
                setBooks(sortedBooks);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch books:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="my-10 px-4 w-11/12 mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center text-indigo-700">
                Popular Books
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {books.map(book => (
                    <motion.div
                        initial={{ backgroundColor: '#fffdf3' }}
                        animate={{ backgroundColor: ['#fffdf3', '#f0f9ff', '#fffdf3'] }}
                        transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}
                        key={book._id}
                        className="card card-side hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-xl overflow-hidden border border-gray-200"
                    >
                        <figure className="w-1/2 p-4 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-pink-50">
                            <img
                                src={book.cover_photo}
                                alt={book.book_title}
                                className="h-60 w-full object-contain rounded-lg shadow-md"
                            />
                        </figure>

                        <div className="w-1/2 px-4 py-6 flex flex-col justify-center items-center text-center space-y-3 font-semibold">
                            <h3 className="text-xl font-bold text-indigo-800">{book.book_title}</h3>
                            <p className="text-sm text-gray-500">By {book.book_author}</p>
                            <p className="text-sm text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                                ❤️ {book.upvote} Upvotes
                            </p>
                            {/* <div className="">
                                <Lottie
                                    style={{ width: '100px' }}
                                    animationData={loveLottie}
                                    loop={true}>
                                </Lottie>
                            </div> */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};


export default PopularBooks;
