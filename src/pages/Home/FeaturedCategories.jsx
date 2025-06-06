import React from 'react';

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
    <div className="my-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 Featured Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map(cat => (
          <div key={cat.id} className="bg-base-100 text-center p-4 rounded-xl shadow-2xl hover:shadow-md transition">
            <p className="font-medium text-lg">{cat.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
