import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import SocialSignIn from '../Shared/SocialSignIn';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router';

const SignIn = () => {

    const { userLogin } = use(AuthContext)

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                Swal.fire({
                    title: "Login Successfully!",
                    icon: "success",
                    draggable: true,
                });
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    className="input"
                                    placeholder="Email" />

                                <label className="label">Password</label>
                                <input
                                    name='password'
                                    type="password"
                                    className="input"
                                    placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <p className='flex justify-center'>Don't have any account 
                                <NavLink className='underline ml-2' to={'/register'}>Register</NavLink>
                            </p>
                        </form>
                        <SocialSignIn></SocialSignIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;