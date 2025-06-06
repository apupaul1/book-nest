import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';


const Navbar = () => {

    const { user, userSignOut } = use(AuthContext)

    console.log(user);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign out sucessfully",
                    showConfirmButton: false,
                    timer: 1500,
                    toast: true
                });
                console.log('Signed out user');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <div className='flex gap-12'>
        <NavLink
            className={({ isActive }) => (
                isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : '')}
            to={'/'}>
            Home
        </NavLink>

        <NavLink
            className={({ isActive }) => (
                isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : '')}
            to={'/bookshelf'}>
            BookShelf
        </NavLink>

        <NavLink
        to={'/addbooks'}
        >Add Book</NavLink>

        <NavLink
        to={'/mybooks'}
        >My Books</NavLink>
    </div>

    return (
        <div className="navbar bg-gray-400 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img
                        className='w-[50px]'
                        src="/logo.png"
                        alt="" />
                    <h2 className=" text-xl">BookNest</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button
                            onClick={handleSignOut}
                            className='btn'>Sign Out</button> :
                        <div className='flex gap-4'>
                            <NavLink
                                to={'/register'}
                                className="btn">Register</NavLink>
                            <NavLink
                                to={'/signin'}
                                className="btn">Login</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;