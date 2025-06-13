import React from 'react';
import Lottie from 'lottie-react';
import bookAnimation from '../../assets/lottie/book-lottie.json';

const categories = [
  { id: 1, category: 'Fiction' },
  { id: 2, category: 'Non-Fiction' },
  { id: 3, category: 'Fantasy' },
  { id: 4, category: 'Science Fiction' },
  { id: 5, category: 'Mystery' },
  { id: 6, category: 'Romance' },
  { id: 7, category: 'Thriller' },
  { id: 8, category: 'Biography' },
  { id: 9, category: 'Self-Help' },
  { id: 10, category: 'Historical' }
];

const FeaturedCategories = () => {
  return (
    <section className="my-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-gray-800">
        📚 Featured Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-indigo-500 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16">
                <Lottie animationData={bookAnimation} loop={true} />
              </div>
              <p className="font-semibold text-sm md:text-lg text-center group-hover:text-indigo-600 transition-colors duration-200">
                {cat.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
