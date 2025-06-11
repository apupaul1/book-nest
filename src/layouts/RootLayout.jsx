import React, { use } from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';
import Loading from '../pages/Shared/Loading';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
};

const pageTransition = {
    duration: 0.4,
    ease: 'easeInOut'
};

const RootLayout = () => {
    const { loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='bg-[#E6E6FA]'>
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default RootLayout;
