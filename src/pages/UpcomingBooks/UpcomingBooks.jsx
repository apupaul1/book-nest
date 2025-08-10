import { FaCalendarAlt, FaTag, FaStar } from "react-icons/fa";

const UpcomingBooks = () => {
  const upcomingBooks = [
    {
      title: "The Winds of Winter",
      author: "George R. R. Martin",
      date: "2025-12-15",
      img: "https://i.ibb.co.com/zh8ZLjmK/download.jpg",
      desc: "The long-awaited next installment of A Song of Ice and Fire saga.",
      rating: 5,
      offer: "Pre-order & get 15% OFF",
    },
    {
      title: "Doors of Stone",
      author: "Patrick Rothfuss",
      date: "2025-09-10",
      img: "https://i.ibb.co.com/VW4ZjJmg/download-1.jpg",
      desc: "The final book in the Kingkiller Chronicle trilogy.",
      rating: 4,
      offer: "Exclusive signed edition available",
    },
    {
      title: "The Lost City",
      author: "Jane Harper",
      date: "2025-10-05",
      img: "https://i.ibb.co.com/TBvrmn1h/download-2.jpg",
      desc: "A thrilling mystery set deep in the Australian outback.",
      rating: 4,
      offer: "Free bookmark with every pre-order",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-gray-800">
        Upcoming Releases & Special Offers
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {upcomingBooks.map((book, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="w-1/2 mx-auto">
              <img src={book.img} alt={book.title} className=" object-cover w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p className="text-sm text-gray-500">By {book.author}</p>
              <p className="mt-2 text-sm">{book.desc}</p>
              <div className="flex items-center gap-1 text-amber-600 mt-2">
                {Array.from({ length: book.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="flex items-center gap-2 text-blue-600 mt-3">
                <FaCalendarAlt /> 
                <span className="text-sm font-medium">
                  Release Date: {new Date(book.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-600 mt-2">
                <FaTag /> 
                <span className="text-sm font-semibold">{book.offer}</span>
              </div>
              <div className="card-actions mt-4 mx-auto">
                <button className="btn btn-neutral btn-sm">Pre-Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBooks;
