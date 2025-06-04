import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import SocialSignIn from '../Shared/SocialSignIn';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router';

const Register = () => {

    const { userSignUp } = use(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form.photourl.value

        // User registration

        userSignUp(email, password, name)
            .then(result => {
                Swal.fire({
                    title: "Register Successfully!",
                    icon: "success",
                    draggable: true
                });
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })


    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                />
                                <label className="label">Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    required />
                                <label className="label">Photo URL</label>
                                <input
                                    name='photourl'
                                    type="url"
                                    className="input"
                                    placeholder="Password"
                                />
                                <label className="label">Password</label>
                                <input
                                    name='password'
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$"
                                    title="Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
                                    required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            <p className='flex justify-center'>Already have an account ? 
                                <NavLink className='underline ml-2' to={'/signin'}> Login</NavLink>
                            </p>
                        </form>
                        <SocialSignIn></SocialSignIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;