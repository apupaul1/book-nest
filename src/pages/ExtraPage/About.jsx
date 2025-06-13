// src/pages/About.jsx
import { motion } from "framer-motion";
import { BookOpenCheck, Users, Flame } from "lucide-react";

const About = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-14"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-8">
        About <span className="text-gray-900">Virtual Bookshelf</span>
      </h1>

      <p className="text-center text-md md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
        A digital space to track your reading, discover great books, and stay
        motivated. Built for book lovers, by book lovers.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-2xl text-center hover:shadow-xl transition">
          <BookOpenCheck className="mx-auto text-blue-600 mb-3" size={36} />
          <h3 className="text-xl font-semibold mb-2">Track Reading</h3>
          <p className="text-gray-600 text-sm">
            Manage books by status: Want to Read, Reading, and Read.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-2xl text-center hover:shadow-xl transition">
          <Users className="mx-auto text-blue-600 mb-3" size={36} />
          <h3 className="text-xl font-semibold mb-2">Community Reviews</h3>
          <p className="text-gray-600 text-sm">
            Share insights and discover what others think of books.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-2xl text-center hover:shadow-xl transition">
          <Flame className="mx-auto text-blue-600 mb-3" size={36} />
          <h3 className="text-xl font-semibold mb-2">Popular Picks</h3>
          <p className="text-gray-600 text-sm">
            See what's trending through upvotes and ratings.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
