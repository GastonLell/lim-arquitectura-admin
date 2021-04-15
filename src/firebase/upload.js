import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

import {getFirestore} from "./client";


const db = getFirestore();

export const createPost = ({
    nombre,
    categoria,
    srcImagen
}) => {
  
    // para que solo pueda crear post personas autenticadas
    const user = firebase.auth().currentUser;
    if (user == null) {
      alert("Debe estar registrado para crear el post")
      return;
    }
  
    db.collection('proyectos').add({
        nombre: autor,
        categoria: categoria,
        srcImagen: srcImagen,
        fecha: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(refDoc => console.log(`Id del post => ${refDoc.id}`))
    .catch(err => console.log(`Error creando el post ${err}`))
}

export const UploadFile = ({id, file}) => {
    const refStorage = firebase.storage().ref(`imgsPosts/${id}/${file}`)
    refStorage.put(file).then(
      snapshot => console.log(snapshot)
    )
  }