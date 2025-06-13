import React, { use } from 'react';
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import SocialSignIn from '../Shared/SocialSignIn';
import Swal from 'sweetalert2';
import { NavLink, useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import registerLottie from '../../assets/lottie/register.json'

const Register = () => {

    const { userSignUp, updateUser } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = '/'


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form.photourl.value

        const data = {
            "name": name,
            "email": email,
            "photoUrl": photoUrl
        }

        // User registration

        userSignUp(email, password)
            .then(result => {
                Swal.fire({
                    title: "Register Successfully!",
                    icon: "success",
                    draggable: true
                });
                console.log(result.user);
                updateUser(name, photoUrl)
                    .then(() => {
                        console.log("Updated");
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                navigate(from)

                axios.post('https://b11-a11-c19-server.vercel.app/users', data)
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(error => {
                console.log(error);
            })


    }

    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse lg:relative">
                <div className="text-center lg:text-left lg:absolute lg:top-3 lg:-left-78">
                    <Lottie
                        style={{ width: '300px' }}
                        animationData={registerLottie}
                        loop={true}>
                    </Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                    <div className="card-body">
                        <h1 className="text-3xl md:text-5xl font-bold text-center">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                    required
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
                                    placeholder="Photo URL"
                                    required
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