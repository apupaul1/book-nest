import React, { use, Suspense } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import MyAddedBooks from './MyAddedBooks';
import { addedBooks } from '../../api/myBooks';

const MyBook = () => {

    const {user} = use(AuthContext);

    return (
        <div className=' w-10/12 mx-auto mt-12'>
            <h2 className='text-3xl font-bold text-center'>My Books</h2>
            <Suspense>
                <MyAddedBooks 
                addedBooks={addedBooks(user.email)}>
                </MyAddedBooks>
            </Suspense>
        </div>
    );
};

export default MyBook;