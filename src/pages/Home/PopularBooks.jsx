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
                            backgroundColor: ['#fff333', '#ff6b33', '#33ff4f'],
                            transition: { duration: 3, delay: 2, repeat: Infinity }
                        }}
                        key={book._id}
                        className="card card-side bg-base-100 shadow-xl"
                    >
                        <figure className='w-1/2'>
                            <img
                                src={book.cover_photo}
                                alt={book.book_title}
                                className=" w-full rounded"
                            />
                        </figure>
                        <div className=' w-1/2 flex flex-col justify-center space-y-6 items-center font-bold'>
                            <h3 className="card-title text-lg font-semibold">{book.book_title}</h3>
                            <p className="text-sm text-gray-600  flex items-center">By {book.book_author}</p>
                            <p className="card-actions">Total Upvotes : {book.upvote}</p>
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
