import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, updateProfile } from 'firebase/auth';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const userSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // if (currentUser?.email) {
            //     const userData = { email: currentUser.email }
            //     axios.post('https://b11-a11-c19-server.vercel.app/jwt', userData)
            //     .then(res => {
            //         console.log(res.data)
            //     })
            //     .catch(error => console.log(error));
            // }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        loading,
        user,
        userSignUp,
        googleSignIn,
        userLogin,
        userSignOut,
        updateUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;