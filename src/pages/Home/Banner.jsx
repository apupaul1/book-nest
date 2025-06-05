import React from 'react';
import { motion } from 'framer-motion';
import book1 from '../../assets/banner/banner1.jpg';
import book2 from '../../assets/banner/banner2.jpg';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full">

                {/* Slide 1 - Welcome */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        style={{
                            backgroundImage: "url('https://i.ibb.co/hQqXHPJ/abstract-blur-beautiful-luxury-shopping-mall-center.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="hero h-[540px]"
                    >
                        <div className='w-[500px] lg:w-full flex gap-20 items-center px-6 md:px-16 backdrop-blur-xs'>
                            <div className='lg:ml-6 '>
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-neutral drop-shadow-lg">
                                    Welcome to BookNest
                                </h1>
                                <p className="mb-5 text-neutral drop-shadow">
                                    Your personal digital bookshelf — organize, track, and explore your reading journey effortlessly.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary"
                                >
                                    Start Exploring
                                </motion.button>
                            </div>

                            <div className='hidden md:flex gap-10'>
                                <motion.img
                                    animate={{ x: [0, 100, 0] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                    className='w-[300px] rounded-bl-2xl rounded-t-2xl border-l-4 border-red-600 shadow-lg'
                                    src={book1}
                                    alt="book1"
                                />
                                <motion.img
                                    animate={{ y: [0, 100, 0] }}
                                    transition={{ duration: 6, delay: 2, repeat: Infinity }}
                                    className='w-[300px] rounded-bl-2xl rounded-t-2xl border-l-4 border-red-600 shadow-lg'
                                    src={book2}
                                    alt="book2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 - Organize */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="hero h-[540px]"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/8nQfm5Dt/banner2.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <motion.div
                                className="max-w-md"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="mb-5 text-4xl font-bold">Organize Your Library</h1>
                                <p className="mb-5">
                                    Keep track of what you’ve read, what you own, and what you want to read next — all in one place.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary"
                                >
                                    View My Books
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 - Discover */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div
                        className="hero h-[540px]"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/m5tvtGGP/library-with-round-window-bookcase-with-bookcase-left.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <motion.div
                                className="max-w-md"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="mb-5 text-4xl font-bold">Discover Your Next Favorite</h1>
                                <p className="mb-5">
                                    Get AI-powered book suggestions based on your reading taste and favorite genres.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary"
                                >
                                    Get Recommendations
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
