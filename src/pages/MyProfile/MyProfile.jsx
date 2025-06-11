import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Loading from '../Shared/Loading';
import { motion } from 'motion/react';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a29bfe'];

const MyProfile = () => {
    const { user } = use(AuthContext);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);


    const axiosSecure = UseAxiosSecure();


    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/books/mybooks?email=${user.email}`)
                .then(res => {
                    setBooks(res.data);
                    setLoading(false);
                });
        }
    }, [user, axiosSecure]);

    if (loading) return <Loading />;

    const totalBooks = books.length;

    const categoryCount = books.reduce((acc, book) => {
        acc[book.book_category] = (acc[book.book_category] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.entries(categoryCount).map(([name, value]) => ({
        name,
        value,
    }));

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className='text-center my-8 text-3xl font-bold'>My Profile</h1>
            <motion.div className="max-w-4xl mx-auto bg-amber-50 shadow-lg rounded-2xl p-6 space-y-6 border-3"
                animate={{
                    borderColor: [
                        "#f59e0b", // Amber
                        "#3b82f6", // Blue
                        "#10b981", // Green
                        "#ef4444", // Red
                        "#f59e0b", // Amber (Back to start)
                    ]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                }}>
                <div className="flex items-center space-x-6">
                    <img
                        src={user.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover border"
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{user.displayName || "Anonymous User"}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                </div>

                {/* Summary Info */}
                <div className="grid grid-cols-2 gap-4 text-center mb-12">
                    <div className="bg-blue-100 p-4 rounded-xl">
                        <p className="text-xl font-semibold text-blue-700">{totalBooks}</p>
                        <p className="text-sm text-gray-600">Total Books</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-xl">
                        <p className="text-xl font-semibold text-green-700">{Object.keys(categoryCount).length}</p>
                        <p className="text-sm text-gray-600">Categories</p>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="h-64 w-full">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={100}
                                fill="#8884d8"
                                label={({ name, value }) => `${name} (${value})`}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>
        </div>
    );
};

export default MyProfile;
