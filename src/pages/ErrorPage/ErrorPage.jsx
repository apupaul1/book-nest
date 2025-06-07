import Navbar from '../Shared/Navbar';
import { NavLink } from 'react-router';

const ErrorPage = () => {

    return (
        <div className='min-h-screen'>
            <div className='flex justify-center items-center pt-20'>
                <img className='w-2/4  rounded-4xl shadow-lg' src="https://i.ibb.co.com/8gZdM2Vz/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-m.jpg" alt="" />
            </div>
            <div className='p-8  text-center'>
                <h2 className='text-4xl font-bold text-pink-600 mb-2'>404 - Page Not Found</h2>
                <h2 className='mb-4'>Oops! The page you're looking for doesn't exist</h2>
                <NavLink to={'/'}>
                    <button className='btn mb-12 font-bold text-[#FFFFFF] bg-[#176AE5] rounded-xl hover:bg-slate-800'>Go Back Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;