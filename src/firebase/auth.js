import {useEffect, useState, createContext} from "react";

import app from "./client";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
/* 
export const signIn = ({email, password}) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            if (res.user) {
                console.log("adentroooo")
            }
        })
        .catch(e => {
          console.log(e)
          window.location="https://lim-arquitectura-admin.web.app"
        } )
}
 */