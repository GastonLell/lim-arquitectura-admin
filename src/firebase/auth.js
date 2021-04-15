import firebase from "firebase/app"
import "firebase/auth";
import {getFirebase} from "./client"

const firebaseApp = getFirebase()

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
