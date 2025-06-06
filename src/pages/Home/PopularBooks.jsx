import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loveLottie from '../../assets/lottie/Animation - 1749140871253.json'
import { motion } from 'motion/react';

const PopularBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => {
                const sortedBooks = data
                    .sort((a, b) => (b.upvote || 0) - (a.upvote || 0))
                    .slice(0, 6);
                setBooks(sortedBooks);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch books:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading popular books...</div>;
    }

    return (
        <div className="my-10 px-4 w-10/12 mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Popular Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.map(book => (
                    <motion.div
                        animate={{
                            backgroundColor: ['#fff333', '#ff6b33', '#33ff4f', '#33ffb8 ', '#282d55'],
                                transition: { duration: 4, repeat: Infinity }
                        }}
                        key={book._id}
                        className=" bg-base-100 flex items-center p-8 rounded-2xl shadow-2xl hover:shadow-lg transition"
                    >
                        <img
                            src={book.cover_photo}
                            alt={book.book_title}
                            className="h-40 w-full object-cover mb-3 rounded flex-1"
                        />
                        <div className='flex-1 flex flex-col justify-center items-center'>
                            <h3 className="text-lg font-semibold">{book.book_title}</h3>
                            <p className="text-sm text-gray-600">By {book.book_author}</p>
                            <div className='stats'>
                                <div className="stat">
                                    <div className="stat-title">Total Upvotes</div>
                                    <div className="stat-value text-primary">{book.upvote}
                                        {/* <Lottie
                                            style={{ width: '100px' }}
                                            animationData={loveLottie}
                                            loop={true}>
                                        </Lottie> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PopularBooks;
