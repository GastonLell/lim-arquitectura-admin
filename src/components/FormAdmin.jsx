//REACT
import {useCallback} from "react";

//FIREBASE
import firebase from "firebase"
import {getFirestore} from "../firebase/client";

//BOOTSTRAP
import { Form, Button } from "react-bootstrap";


const FormAdmin = () => {


  const handlePost = useCallback(

    async (event) => {
      event.preventDefault();
      
      const db = getFirestore();

      const {nombre, categoria, file} = event.target.elements;
      
      try{
        let imageDownloadUrl;

        const refStorage = await firebase.storage().ref(`proyectos/${file.files[0].name}`)

        if(!!file){
      
          await refStorage.put(file.files[0]).then(() => console.log("imagen en storage"))
          .catch(err => console.log(err))
      
        }

        await refStorage.getDownloadURL().then(url => {
          imageDownloadUrl = url;
        })

        await db.collection('proyectos').add({
          nombre: nombre.value,
          categoria: categoria.value,
          srcImagen: imageDownloadUrl,
          fecha: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(refDoc => {
          console.log(refDoc.id)
        })
        .catch(err => console.log(`error al enviar documentos a firebase ${err}`))
      
      } catch (error){
        alert(`error al cargar imagen ${error}`)
      }
    
    }, [])


  return (
    <Form onSubmit={handlePost}>
      <Form.Group>
        <Form.Control name="nombre" type="text" placeholder="Ingrese el nombre..." className="my-4"/>
      </Form.Group>
      <Form.Group>
        <Form.Control name="categoria" as="select" className="my-4">
          <option selected>Seleccione categoria</option>
          <option value="renders">Renders</option>
          <option value="videos">Videos</option>
          <option value="realidad">Realidad Virtual</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.File name="file" className="my-4" />
      </Form.Group>
        <Button variant="outline-dark" type="submit" className="my-2 align-items-end">Guardar</Button>
    </Form>
  );
};
export default FormAdmin;