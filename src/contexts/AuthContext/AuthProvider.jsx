import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {auth} from '../../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const userSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const userSignOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = auth.onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        loading,
        user,
        userSignUp,
        googleSignIn,
        userLogin,
        userSignOut
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;