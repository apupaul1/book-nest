import { FaStar } from "react-icons/fa";
const FeaturedBookSection = () => {


    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800">
                Newly Added Books
            </h2>
            <div className="carousel w-full py-10">
                {/* Carousel Item 1 */}
                <div id="slide6" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 py-16 px-20 rounded-3xl">
                        <div className="hero-content gap-12 flex-col lg:flex-row">
                            <img
                                src="https://i.ibb.co/93qQdwt4/download-3.jpg"
                                className="w-[120px] md:w-[200px] md:max-w-sm rounded-lg shadow-2xl"
                                alt="The Rage of Dragons"
                            />
                            <div>
                                <h1 className="text-2xl md:text-5xl font-bold">The Rage of Dragons</h1>
                                <p className="py-6">
                                    A high fantasy novel about revenge and dragons. A thrilling tale set in a world filled with action and intrigue.
                                </p>
                                <h2 className="py-2 text-xl flex text-amber-600"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
                                <p className="py-2 text-sm">By Evan Winter</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide8" className="btn btn-circle">❮</a>
                        <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Carousel Item 2 */}
                <div id="slide7" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 py-16 px-20 rounded-3xl">
                        <div className="hero-content gap-12 flex-col lg:flex-row">
                            <img
                                src="https://i.ibb.co/84LNP0qw/download-2.jpg"
                                className="w-[120px] md:w-[200px]  rounded-lg shadow-2xl"
                                alt="The Silent Patient"
                            />
                            <div>
                                <h1 className="text-2xl md:text-5xl font-bold">The Silent Patient</h1>
                                <p className="py-6">
                                    A psychological thriller that keeps you on edge until the very end. A must-read for thriller fans.
                                </p>
                                <h2 className="py-2 text-xl flex text-amber-600"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
                                <p className="py-2 text-sm">By Alex Michaelides</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide8" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Carousel Item 3 */}
                <div id="slide8" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 py-16 px-20 rounded-3xl">
                        <div className="hero-content gap-12 flex-col lg:flex-row">
                            <img
                                src="https://i.ibb.co/FLQSrgHL/book10.jpg"
                                className="w-[120px] md:w-[200px] rounded-lg shadow-2xl"
                                alt="Educated"
                            />
                            <div>
                                <h1 className="text-2xl md:text-5xl font-bold">Educated</h1>
                                <p className="py-6">
                                    A memoir about a woman who grows up in a strict, survivalist family and eventually escapes to pursue education.
                                </p>
                                <h2 className="py-2 text-xl flex text-amber-600"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h2>
                                <p className="py-2 text-sm">By Tara Westover</p>

                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide7" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBookSection;
