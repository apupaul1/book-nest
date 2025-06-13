// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { Mail, User, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 py-14"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-6">
        Get in <span className="text-gray-900">Touch</span>
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Fill out the form below and we’ll get back to you shortly.
      </p>

      <form className="bg-white shadow-md rounded-2xl p-8 space-y-6">
        <div>
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <User size={18} /> Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <Mail size={18} /> Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <MessageCircle size={18} /> Message
          </label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
