import firebase from 'firebase'
import {getFirestore} from './client';

const db = getFirestore();

export const getProject = ({nombre, categoria, imagenUrl}) => {

    db.collection("proyectos").add({
        nombre: nombre.value,
        categoria: categoria.value,
        srcImagen: imagenUrl,
        fecha: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((refDoc) => {
        console.log(refDoc.id);
      })
      .catch((err) =>
        console.log(`error al enviar documentos a firebase ${err}`)
    );
}