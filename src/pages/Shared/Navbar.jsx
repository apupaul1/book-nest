import React from 'react';
import { NavLink } from 'react-router';


const Navbar = () => {

    const links = <div className='flex gap-12'>
        <NavLink 
        className={({ isActive }) => (
            isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : '')} 
        to={'/'}>
            <a>Home</a>
            </NavLink>

        <NavLink 
        className={({ isActive }) => (
            isActive ? 'text-indigo-600 underline underline-offset-4 decoration-3' : '')} 
        to={'/bookshelf'}>
            <a>BookShelf</a>
            </NavLink>

        <NavLink><a>Add Book</a></NavLink>

        <NavLink><a>My Books</a></NavLink>
    </div>

    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                <a className="btn btn-ghost text-xl">BookNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink 
                to={'/register'}
                className="btn">Register</NavLink>
                <NavLink 
                to={'/signin'}
                className="btn">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;