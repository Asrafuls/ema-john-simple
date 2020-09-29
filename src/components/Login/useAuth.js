import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import firebaseConfig from '../../firebase.config';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);

const getUser = user => {
    const { displayName, email, photoURL } = user;
    return { name: displayName, email, photo: photoURL }
}

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/loginForCheckout", 
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
const Auth = () => {
    const [user, setUser] = useState(null)

    const singInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
            .then(res => {
                const signedUser = getUser(res.user)
                setUser(signedUser)
                return (res.user)
            })
            .catch(err => {
                console.log(err)
                setUser(null)
                return (err.message)
            })
    }
    const singOut = () => {
        firebase.auth().signOut()
            .then(res => {
                setUser(null)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const currentUser = getUser(usr)
                setUser(currentUser)
            } else {

            }
        });
    }, [])
    const signedInWithFb = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const token = res.credential.accessToken;
                const user = res.user;
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return {
        user,
        singOut,
        singInWithGoogle,
        signedInWithFb,
    };
};

export default Auth;