import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { UserPlus, LogIn, LogOut } from 'lucide-react';

const Navbar = () => {

    const { user, userSignOut } = use(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign out successfully",
                    showConfirmButton: false,
                    timer: 1500,
                    toast: true
                });
                console.log('Signed out user');
            })
            .catch(error => {
                console.log(error);
            });
    };

    const links = <>
        <li>
            <NavLink
                className={({ isActive }) => (
                    isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : '')}
                to={'/'}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive }) => (
                    isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : '')}
                to={'/bookshelf'}>
                BookShelf
            </NavLink>
        </li>
        {
            user && <>
                <li>
                    <NavLink
                        className={({ isActive }) => (
                            isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : '')}
                        to={'/addbooks'}>
                        Add Book
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (
                            isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : '')}
                        to={'/mybooks'}>
                        My Books
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (
                            isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : '')}
                        to={'/myprofile'}>
                        My Profile
                    </NavLink>
                </li>
            </>
        }
    </>;

    return (
        <div className="sticky top-0 z-50 bg-gray-400 shadow-md">
            <div className="navbar mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img
                            className='w-[40px] md:w-[50px]'
                            src="/logo.png"
                            alt="BookNest Logo" />
                        <h2 className="text-lg md:text-xl font-bold text-slate-900">BookNest</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (
                            <div className='flex gap-5 items-center'>
                                <div className="avatar avatar-online hidden md:block">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'} />
                                    </div>
                                </div>
                                <button
                                    onClick={handleSignOut}
                                    className='btn btn-neutral rounded-md hover:bg-slate-900 transition font-bold text-xs lg:text-sm'>
                                    <LogOut size={16} /> Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <NavLink
                                    to="/register"
                                    className="btn btn-neutral flex items-center gap-1 text-xs lg:text-sm font-bold rounded-md hover:bg-slate-900 transition"
                                >
                                    <UserPlus size={16} /> Register
                                </NavLink>
                                <NavLink
                                    to="/signin"
                                    className="hidden btn btn-neutral md:flex items-center gap-1 font-bold rounded-md hover:bg-slate-900 transition text-xs lg:text-sm"
                                >
                                    <LogIn size={16} /> Login
                                </NavLink>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
