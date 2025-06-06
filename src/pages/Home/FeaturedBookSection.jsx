
const FeaturedBookSection = () => {

    const star = <>
        <p className="rating rating-lg rating-half">
            <input type="radio" name="rating-11" className="rating-hidden" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="0.5 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="1 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="1.5 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="2 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="2.5 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="3 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="3.5 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="4 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-400" aria-label="4.5 star" defaultChecked />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-400" aria-label="5 star" />
        </p>
    </>

    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-3xl text-center mt-10 font-bold">Newly Added Books</h2>
            <div className="carousel w-full py-10">
                {/* Carousel Item 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 py-16 px-20 rounded-3xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-sm rounded-lg shadow-2xl"
                                alt="The Rage of Dragons"
                            />
                            <div>
                                <h1 className="text-5xl font-bold">The Rage of Dragons</h1>
                                <p className="py-6">
                                    A high fantasy novel about revenge and dragons. A thrilling tale set in a world filled with action and intrigue.
                                </p>
                                <h2 className="py-2 text-xl">{star}</h2>
                                <p className="py-2 text-sm">By Evan Winter</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Carousel Item 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 py-16 px-20 rounded-3xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-sm rounded-lg shadow-2xl"
                                alt="The Silent Patient"
                            />
                            <div>
                                <h1 className="text-5xl font-bold">The Silent Patient</h1>
                                <p className="py-6">
                                    A psychological thriller that keeps you on edge until the very end. A must-read for thriller fans.
                                </p>
                                <h2 className="py-2 text-xl">{star}</h2>
                                <p className="py-2 text-sm">By Alex Michaelides</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Carousel Item 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero bg-base-200 py-16 px-20 rounded-3xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-sm rounded-lg shadow-2xl"
                                alt="Educated"
                            />
                            <div>
                                <h1 className="text-5xl font-bold">Educated</h1>
                                <p className="py-6">
                                    A memoir about a woman who grows up in a strict, survivalist family and eventually escapes to pursue education.
                                </p>
                                <h2 className="py-2 text-xl">{star}</h2>
                                <p className="py-2 text-sm">By Tara Westover</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBookSection;
