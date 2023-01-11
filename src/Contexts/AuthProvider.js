import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config'; 


export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)

    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (userInfo) =>{
        return updateProfile(user, userInfo);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,createUser=>{
            console.log('user observing');
            setUser(createUser);
            setLoading(false);
        });

        return () => unsubscribe();
    },[])

    const authInfo ={
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;